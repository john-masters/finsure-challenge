var app = angular.module("app", []);

app.controller("controller", [
    "$scope",
    "$http",
    function ($scope, $http) {
        $scope.error = "";
        $scope.propertyName = "attributes.code";
        $scope.reverse = false;
        $scope.editingRow = "";

        $scope.getLenders = function () {
            $scope.error = "";
            $http
                .get("/lenders")
                .then(function (data) {
                    $scope.lenders = data.data.data;
                })
                .catch(function (error) {
                    $scope.error = `${error.status} - ${error.statusText}`;
                });
        };
        $scope.sortBy = function (propertyName) {
            $scope.propertyName = propertyName;
            $scope.reverse =
                $scope.propertyName === propertyName ? !$scope.reverse : false;
        };
        $scope.setEditable = function (id) {
            $scope.editingRow = id;
        };
        $scope.saveEdits = function (lender) {
            $scope.editingRow = "";
            console.log("updated lender: ", lender);
        };
        $scope.getLenders();
    },
]);
