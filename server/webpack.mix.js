// webpack.mix.js

let mix = require('laravel-mix');




mix.react('resources/js/app.jsx', 'public/js/app.js');
// aliases so instead of e.g. '../../components/test' we can import files like '@/components/test'
mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(
                __dirname,
                "resources/assets/js"
            ),
            "@sass": path.resolve(
                __dirname,
                "resources/assets/sass"
            ),
        }
    }
 });
