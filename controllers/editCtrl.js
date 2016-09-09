/**
 * Created by Jeffry Romero on 08/09/2016.
 */
pcApp.controller('EditController', function ($scope,$firebaseArray,FBURL) {
    var test=new Firebase(FBURL.url+"floors");
    $scope.floors=$firebaseArray(test);
    console.log($scope.floors);
    
    $scope.update= function (floor) {
        console.log(floor);
        data={};
        data[floor.$id]={
            free:floor.free,
            id:floor.id
        };
        console.log(data);
        test.update(data);
    }
});