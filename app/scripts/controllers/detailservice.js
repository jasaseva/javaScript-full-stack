'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:DetailserviceCtrl
 * @description
 * # DetailserviceCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('DetailserviceCtrl', detailserviceCtrl);
detailserviceCtrl.$inject = ['spaServicesHttp', '$state'];
  function detailserviceCtrl(spaServicesHttp, $state) {
    var vm = this;
    vm.getByIdHttp = getByIdHttp;
    vm.$onInit = onInit;

    function onInit() {
      vm.getByIdHttp();
    }

    function getByIdHttp() {
      console.log('load start');
      spaServicesHttp.getById($state.params.id)
        .then(function (result) {
          vm.descripcionSeleccionada = result.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  
      console.log('load ended');
    }
  };
