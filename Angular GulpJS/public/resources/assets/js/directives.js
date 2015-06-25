'use strict';

/* Directives */

(function(){
	angular.module('prueba.directives',[])
		.directive('pruebaPartial1', function() {
			return {
				restrict: 'E',
				templateUrl: 'partials/prueba-partial1.html'
			}
		})
})();