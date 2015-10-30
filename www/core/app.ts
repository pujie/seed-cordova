/// <reference path="../../typings/tsd.d.ts" />

require('angular-material/angular-material.css');

const routerConfig = require('./router.ts');

// if (ON_TEST) {
    // require('angular-mocks/angular-mocks');
// }

export default angular.module('app', [
    require('angular-material'),
    require('angular-ui-router'),
    require('../components/home/home.ts'),
    require('../components/page2/page2.ts'),
    require('../components/aws/aws.ts'),
])
    .config(routerConfig)
    .name
