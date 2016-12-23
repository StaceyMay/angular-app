(function () {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {

    $scope.one = "Take Out Trash";

    $scope.two = "Do Laundry";

    $scope.three = "Feed Dogs";

    window.$scope = $scope;

  });

}) ();