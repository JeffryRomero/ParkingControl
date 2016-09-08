/**
 * Created by Jeffry Romero on 08/09/2016.
 */
angular.module('ParkingApp').controller('MainController', function ($scope,$firebaseObject,$firebaseArray,FBURL) {
    var test=new Firebase(FBURL.url+"floors");
    //test.orderByChild('id');
    //var test=new Firebase('https://jeffry-firebaseapp.firebaseio.com/jobs');
    $scope.floors=$firebaseObject(test);
    console.log($scope.floors);
    //jobs.$bindTo($scope,"data");
});