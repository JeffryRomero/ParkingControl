/**
 * Created by Jeffry Romero on 08/09/2016.
 */
'use strict';
var pcApp=angular.module('ParkingApp', ['ngRoute','firebase','ui.bootstrap'])
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
            .when('/admin',{
                templateUrl: 'views/editInfo.html',
                controller: 'EditController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });