var app = angular.module("app", []);

app.controller("controller", [
    "$scope",
    "$http",
    function ($scope, $http) {
        $http.get("/lenders").then(function (data) {
            $scope.lenders = data.data.data;
        });
    },
]);
