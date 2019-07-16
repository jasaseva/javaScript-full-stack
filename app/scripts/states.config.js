'use strict';

angular.module('happySpaApp').config(settings);

settings.$inject = ['$stateProvider'];
function settings($stateProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'view/main.html'
    }
}