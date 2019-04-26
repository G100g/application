
'use strict';

var nconf = require('nconf');

nconf
  .argv()
  .file('localisation', { file: __dirname+'/../config/localisation.json' })
  .file('languages', { file: __dirname+'/../config/languages.json' })
  .file({ file: __dirname+'/../config/app.json' });

module.exports = nconf;
