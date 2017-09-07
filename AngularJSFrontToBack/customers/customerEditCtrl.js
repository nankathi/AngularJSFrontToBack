(function () {
    angular
        .module("customerApp")
        .controller("customerEditCtrl", ['$scope', '$http', '$routeParams', '$location',
            function ($scope, $http, $routeParams, $location) {

                var customerId = $routeParams.id | 0;

                var apiUrl = "/api/customers/" + customerId;

                if (customerId == 0) {
                    $scope.IsNew = true;
                    $scope.title = "Create New Customer";
                } else {
                    $scope.IsNew = false;
                    $scope.title = "Edit Customer : " + customerId;
                    $http({
                        method: "GET",
                        url: "/api/customers/",
                        params: { "customerId": customerId }
                    }).then(function (result) {
                        $scope.firstname = result.data.FirstName;
                        $scope.lastname = result.data.LastName;
                        $scope.middlename = result.data.MiddleName;
                        $scope.isactive = result.data.IsActive;
                    });
                }
                debugger;
                /*$http.get("/api/customers/" + customerId)*/
               

                $scope.save = function (isValid) {
                    debugger;
                    $scope.submitted = true;
                    var obj = {
                        CustomerId: customerId,
                        FirstName: $scope.firstname,
                        LastName: $scope.lastname,
                        MiddleName: $scope.middlename,
                        IsActive: $scope.isactive
                    };

                    //check if new customer
                    
                    if (isValid) {
                        if (customerId == 0) {
                           
                            $http.post("/api/customers/", obj).then(function (data) {
                                $location.path('/customers');
                            },
                                function (error) {
                                    $scope.error = "Error has occured while saving customer" + error;
                                });
                        }
                        else {

                            $http.put("/api/customers/" + customerId, obj).then(function (data) {
                                $location.path('/customers');
                            },
                                function (error) {
                                    $scope.error = "Error has occured while saving customer" + error;
                                })
                        }
                    }

                    //Set correct text to button 
                    if ($routeParams.id) {
                        $scope.id = $routeParams.id;
                        $scope.title = "Edit Employee";
                        $http({
                            method: "GET",
                            url: "/api/customers/",
                            params: { "customerId": $scope.id }
                        }).then(function (result) {
                            $scope.firstname = result.data.FirstName;
                            $scope.lastname = result.data.LastName;
                            $scope.middlename = result.data.MiddleName;
                            $scope.isactive = result.data.IsActive;
                        });
                    }
                    else {
                        $scope.title = "Create New Customer";
                    }

                }//end of save function

            }//end of controller function

        ]);//end of controller

})(); //end of IIFE