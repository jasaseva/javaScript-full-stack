(function(){
'use strict';

/**
 * @ngdoc service
 * @name happySpaApp.spaBook.service
 * @description
 * # spaServices.service
 * Service in the happySpaApp.
 */
angular.module('happySpaApp').service('spaBookHttp', spaBookHttp);


spaBookHttp.$inject = ['$http', '$q', 'httpConfig'];
function spaBookHttp($http, $q, httpConfig) {
  let book = {
    create: create
  }

  function create(form) {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url+httpConfig.booking.book
    $http.post(url, form)
      .then(function (data) {
        console.log(data);
        defered.resolve(data);
      })
      .catch(function (error) {
        console.log(error);
        defered.reject(error);
      });
      return promise;
  }

  return book;

};
})();