'use strict';

/* App Module */

(function() {
	angular.module('prueba', [
		"ngRoute", 
		"prueba.controllers",
		"prueba.directives",
		"prueba.services",
		"prueba.filters"
	])

	.config(['$routeProvider', function($routeProvider){
  	$routeProvider   
  		.when('/product',{  
  			templateUrl: 'views/view1.html',
        	controller: 'nameController'
  		})
  		.otherwise({
  			redirectTo: '/'
  		});
  }]);
})();
