(function () {
    angular
        .module("customerApp")
        .controller("customerListCtrl", ['$scope', '$http',
        function ($scope, $http) {
            var apiUrl = "/api/customers";
            $http.get(apiUrl).then(function(result){

                $scope.customers = result.data;
               
            });
        }
    ]);
})();

