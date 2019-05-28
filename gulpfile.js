const gulp = require('gulp'); // eslint-disable-line no-unused-vars
const elixir = require('laravel-elixir');

elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src/';
elixir.config.css.autoprefix.options.browsers = ['last 2 versions'];

elixir((mix) => {
  mix
    .copy('src/**/*.html', 'dist/')
    .copy('src/assets/', 'dist/assets/')

    .scriptsIn('src/scripts/', 'dist/scripts/app.js')

    .sass('app.scss', 'dist/styles/app.css', 'src/styles', { outputStyle: 'expanded' })
    .sass('app.scss', 'dist/styles/app.min.css', 'src/styles', { outputStyle: 'compressed' })

    .browserSync({
      proxy: false,
      server: 'dist',
      files: [
        'dist/**/*'
      ]
    });
});
