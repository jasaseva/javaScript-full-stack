'use strict';

/**
 * @ngdoc service
 * @name happySpaApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the happySpaApp.
 */
angular.module('happySpaApp').factory('spaServices', spaServices);

spaServices.$inject = [];
function spaServices() {

  var dataServices = [
    { id: 1, name: 'Masaje sencillo', cost: '60000', description: '30 minutos de masaje relajante sin final feliz', finalFeliz: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg' },
    { id: 2, name: 'exfoliación', cost: '20000', description: 'Se remueve celulas muertas de tu piel', finalFeliz: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg' },
    { id: 3, name: 'Masaje full', cost: '100000', description: 'Se remueve celulas muertas de tu piel', finalFeliz: true, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg' }
  ];

  var services = {
    getAllServices: getAllServicesMethod,
    getServicesById: getServicesById,
    getDescripcionServiceById: getDescripcionServiceById
  }

  return services;

  function getAllServicesMethod() {
    return dataServices;
  }

  function getServicesById(id) {
    for (var i = 0; i < dataServices.length; i++) {
      if (id == dataServices[i].id) {
        return dataServices[i]
      }
      return null;
    }
  }

  function getDescripcionServiceById(id) {
    for (var i = 0; i < dataServices.length; i++) {
      if (id == dataServices[i].id) {
        return dataServices[i].description;
      }
      return null;
    }
  }
};

