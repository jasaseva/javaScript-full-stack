'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('MainCtrl', mainCtrl);
mainCtrl.$inject = ['spaServices', 'spaServicesHttp'];
function mainCtrl(spaServices, spaServicesHttp) {
  var vm = this;
  vm.$onInit = onInit;
  vm.myNombre = 'Jaiber Serna';
  vm.loadSpaServices = loadSpaServices;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;


  function onInit() {
    vm.loadSpaServices();
    vm.loadSpaServicesHttp();
  }

  function loadSpaServices() {
    vm.allServices = spaServices.getAllServices();
  }

  function loadSpaServicesHttp() {
    console.log('load start');
    spaServicesHttp.getAll()
      .then(function (result) {
        vm.serviceList = result.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log('load ended');
  }
};
