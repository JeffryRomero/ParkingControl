/**
 * Created by Jeffry Romero on 08/09/2016.
 */
'use strict';
angular.module('ParkingApp',['ngRoute','firebase'])
    //Firebase URL
    .constant('FBURL',{
        url: 'https://jeffry-firebaseapp.firebaseio.com/'
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });