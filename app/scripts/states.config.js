'use strict';

angular.module('happySpaApp').config(settings);

settings.$inject = ['$stateProvider', '$urlRouterProvider'];
function settings($stateProvider, $urlRouterProvider) {
    
    var homeState = {
        abstract: true, 
        name: 'home',
        templateUrl: 'views/home.html'
    }

    var mainState = {
        name: 'home.main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as vm'
    }

    var aboutState = {
        name: 'home.about',
        url: '/',
        templateUrl: 'views/about.html'
    }

    var detailServiceState = {
        name: 'home.detailService',
        url: '/detailService/{id}',
        templateUrl: 'views/detailService.html',
        controller: 'DetailserviceCtrl as vm'
    }

    var bookServiceState = {
        name: 'home.book',
        url: '/book/{id}',
        templateUrl: 'views/book.html',
        controller: 'BookCtrl as vm'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(aboutState);
    $stateProvider.state(detailServiceState);
    $stateProvider.state(bookServiceState);

    $urlRouterProvider.when('','/');
}