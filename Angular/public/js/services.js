'use strict';

/* Services */

(function(){
	angular.module('prueba.services',[])

		.factory('pruebaService', ['$http', '$q', function($http, $q){

		function all(){
			var deferred = $q.defer(); //metodo defer me permite interactuar con la promise
			$http.get('http://direccion') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
				.success(function(data){ //esta variable data contiene los datos del array del product obtenido del servidor
					console.log(data);
					deferred.resolve(data)
				});

			return deferred.promise;
		}

		//obetos que retorna el servicio tipo factory
		return {
			all : all
		}
	}]);

})();