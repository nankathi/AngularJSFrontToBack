
(function () {
    var customerApp = angular.module('customerApp', ['ngRoute']);

    customerApp.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider)
    {
            //Define routes
        $routeProvider
            .when('/customers',
            {
                templateUrl: 'customers/customerListView.html',
                controller: 'customerListCtrl'
            }).
            when('/create', {
                templateUrl: 'customers/customerEditView.html',
                controller: 'customerEditCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'customers/customerEditView.html',
                controller: 'customerEditCtrl'
            })
            .when('/delete/:id', {
                templateUrl: 'customers/customerDeleteView.html',
                controller: 'customerDeleteCtrl'
            }).
            otherwise({
                redirectTo: '/customers'
            });

        $locationProvider.html5Mode(true);
    }]);
})();
