(function () {
    angular
        .module("customerApp")
        .controller("customerDeleteCtrl", ['$scope', '$http', '$routeParams', '$location',
            function ($scope, $http, $routeParams, $location) {
                $scope.id = $routeParams.id;
                $http({
                    method: "GET",
                    url: "/api/customers/",
                    params: { "customerId": $scope.id }
                }).then(function (result) {
                    debugger;
                    $scope.firstname = result.data.FirstName;
                    $scope.lastname = result.data.LastName;
                    $scope.middlename = result.data.MiddleName;
                    $scope.isactive = result.data.IsActive;
                });

                $scope.delete = function () {
                    $http({
                        method: "DELETE",
                        url: "/api/customers/",
                        params: { "customerID": $scope.id }
                    }).then(function (data) {
                            $location.path('/customers');
                        },
                        function (error) {
                            $scope.error = "An error occured while deleting customer : " + $scope.id;
                        }
                    )
                }
            }

        ]);
})();