/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./aws.d.ts" />

// To use this library with webpack:
//
// 1. inject aws-sdk into index.html using <script> tag
//
// <script src="https://sdk.amazonaws.com/js/aws-sdk-2.2.13.min.js"></script>//
//
// 2. in webpack.config.js, use definePlugin to define ACCESS_KEY_ID and SECRET_ACCESS_KEY
//
// plugins: [
//     new webpack.DefinePlugin({
// 	ACCESS_KEY_ID: JSON.stringify(process.env.ACCESS_KEY_ID),
// 	SECRET_ACCESS_KEY: JSON.stringify(process.env.SECRET_ACCESS_KEY),
//     }),
// ]

var AWS = (typeof window !== 'undefined') ? window.AWS : require('aws-sdk');

console.log(ACCESS_KEY_ID);

AWS.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: 'us-east-1',
});


var Promise = require('bluebird');
var db = new AWS.DynamoDB();

function listTables(callback) {
    db.listTables({}, (err,data) => {
 	if (err) return callback(err);
 	return callback(null, data);
    })
};

var listTablesAsync = Promise.promisify(listTables);

export const animal = {
    listTables,
    listTablesAsync
};

if (typeof module !== 'undefined') module.exports = animal;

// if (require.main === module) {
//     listTablesAsync().then(function(data) {
// 	console.log('listTablesAsync');
// 	console.log('data:', data);
//     });
// }
