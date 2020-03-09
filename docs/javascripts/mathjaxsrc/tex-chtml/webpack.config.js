const PACKAGE = require('../../webpack.common.js');

module.exports = PACKAGE(
    'tex-chtml',                        // the package to build
    '../../../js',                      // location of the MathJax js library
    [],                                 // packages to link to
    __dirname                           // our directory
);
