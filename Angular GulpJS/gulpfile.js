/*
* Dependencias
*/
var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    livereload = require('gulp-livereload');

elixir(function(mix) {
  elixir.extend('sourcemaps', false);
  mix.less("../../../public/resources/assets/less/styles.less", "public/css/all.css");


  mix.scripts([
    "lib/jquery/jquery.js",
    "lib/bootstrap/bootstrap.js",
    "lib/angular/angular.js",
    "lib/angular-route/angular-route.js",
    "lib/angular-mocks/angular-mocks.js",
    "lib/angular-resource/angular-resource.js",
    "app.js",
    "directives.js",
    "controllers.js",
    "filters.js",
    "services.js"
  ], "public/js/all.js", "public/resources/assets/js");

});


