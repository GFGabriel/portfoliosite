(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider){

        $urlRouterProvider.otherwise('/')
        $locationProvider.html5Mode(true)

        $stateProvider
            .state({
                name: 'home',
                url: '/',
                component: 'main'
            })
            .state({
                name: 'about',
                url: '/aboutme/',
                component: 'about'
            })
            .state({
                name: 'projects',
                url: '/projects/',
                component: 'projects'
            })
    }

}());