angular.module('pg admin ui')

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    // if you want html5 style urls
    //$locationProvider.html5Mode(true);
    
    // where to go when a route is not matched
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'pages/home/home.template.html',
            controller: 'HomeCtrl'
        })
        .state('other', {
            url: '/other/:id',
            templateUrl: 'pages/other/other.template.html',
            controller: 'OtherCtrl'
        })
        .state('newJob', {
            url: '/newJob/',
            templateUrl: 'pages/newJob/newJob.template.html',
            controller: 'NewJobCtrl'
        })
        .state('jobDetails', {
            url: '/jobDetails/',
            templateUrl: 'pages/jobDetails/jobDetails.template.html',
            controller: 'JobDetailsCtrl'
        })
        .state('jobLog', {
            url: '/jobLog/',
            templateUrl: 'pages/jobLog/jobLog.template.html',
            controller: 'JobLogCtrl'
        })
        // yo ux-boilerplate:page DO NOT REMOVE
        ;

}]);