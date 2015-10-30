/// <reference path="../../../typings/tsd.d.ts" />

export default angular.module('app.page2', [
    require('angular-material-icons')
])
    .controller('Page2Controller', Page2Controller)
    .name

function Page2Controller() {
    this.iconName = 'favorite_outline';
}
