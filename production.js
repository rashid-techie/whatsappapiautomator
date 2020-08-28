const fs = require('fs');
const options = {};

//options.port = 4545;

var framework = require('total.js');
framework.http('release', options);
