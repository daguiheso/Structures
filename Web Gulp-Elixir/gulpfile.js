var elixir = require('laravel-elixir');


elixir(function(mix) {
    mix.less("style.less", "assets/css");

    mix.scripts([
    	"jquery/jquery.min.js",
    	"bootstrap/bootstrap.min.js",
    	"app.js"
    ], "assets/js", "resources/assets/js");

});