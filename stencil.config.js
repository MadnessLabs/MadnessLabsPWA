const sass = require('@stencil/sass');

exports.config = {
  nodeResolve: {
    browser: true
  },
  copy: [
    {
      src: "../node_modules/firebase/firebase-*.js",
      dest: "assets/js"
    }
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      },
      resourcesUrl: process.argv.indexOf("--cordova") >= 0 ? "build/app" : false
    }
  ],
  globalStyle: 'src/global/app.css',
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};