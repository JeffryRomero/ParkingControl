/**
 * Created by Jeffry Romero on 08/09/2016.
 */
pcApp.controller('MainController', function ($scope,$firebaseArray,FBURL) {
    var test=new Firebase(FBURL.url+"floors");
    $scope.floors=$firebaseArray(test);
    console.log($scope.floors);
});