let config = require('@ucd-lib/cork-app-build').dist({
  root : __dirname,
  entry : 'public/elements/intert-wine.js',
  dist : 'dist/js',
  clientModules : 'public/node_modules'
});

if( !Array.isArray(config) ) config = [config];
config.forEach(conf => {
  conf.output.chunkFilename = '[name]-[hash].'+conf.output.filename;
});

module.exports = config;