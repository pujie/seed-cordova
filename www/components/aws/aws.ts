/// <reference path="../../../typings/tsd.d.ts" />

var animal = require('./animal.ts');

export default angular.module('app.aws', [])
    .controller('AwsController', AwsController)

AwsController.$inject = ['$window', '$timeout', '$q', '$scope'];

function AwsController($window, $timeout, $q, $scope) {
    console.log('AWS:', AWS);
    console.log('animal:', animal);

    animal.listTablesAsync().then((data) => {
	console.log(data.TableNames);
	$scope.$apply(this.tables = data.TableNames);
    });
}
