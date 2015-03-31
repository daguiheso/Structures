'use strict';

/* Controllers */

(function(){
	angular.module('prueba.controllers',[])

		.controller('nameController', ['$scope', 'pruebaService', function ($scope, pruebaService){

			pruebaService.all().then(function (data){
				console.log(data);
				$scope.product = data;
			});
		}])

		/*.controller('TabsController', function(){
		  this.tab = 1;

		  this.selectTab = function(tab){
		    this.tab = tab;
		  };
		}); */

})();