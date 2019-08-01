'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:BookControllerCtrl
 * @description
 * # BookControllerCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = ['spaBookHttp', 'spaServicesHttp', '$state'];
function bookCtrl(spaBookHttp, spaServicesHttp, $state) {
  var vm = this;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;
  vm.$onInit = onInit;
  vm.form = {};
  vm.submitBook = submitBook;

  function onInit() {
    vm.form.id_service = $state.params.id;
    vm.loadSpaServicesHttp();
  }

  function submitBook() {
    spaBookHttp.create(vm.form)
      .then(function (data) {
        Swal.fire({
          type: 'success',
          title: 'successful',
          text: 'ha realizado la reserva existosamente.'
        })
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log('load ended');
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

