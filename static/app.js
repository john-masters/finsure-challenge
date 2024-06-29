var app = angular.module("app", []);

app.controller("controller", [
    "$scope",
    "$http",
    function ($scope, $http) {
        $scope.error = "";
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
        $scope.getLenders();
    },
]);
