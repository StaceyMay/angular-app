(function () {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {

    // $scope.one = "Take Out Trash";

    // $scope.two = "Do Laundry";

    // $scope.three = "Feed Dogs";

    // $scope.chores = ["Take Out Trash", "Do Laundry", "Feed Dogs"]

    $scope.chores = [
      {
        text: "Take out Trash",
        priority: 5,
        assignee: "Janice",
        notCompleted: true
      },
      {
        text: "Do Laundry",
        priority: 8,
        assignee: "Eugene",
        notCompleted: true
      },
      {
        text: "Feed Dogs",
        priority: 7,
        assignee: "Mommy",
        notCompleted: true
      }
    
      ]; 

    $scope.addChore = function(text, priority, asignee) {
    if (text) {
      var chore = {
        text: text,
        // priority: priority,
        // assignee: assignee,
        notCompleted: true

      }; 

      $scope.chores.push(chore);
      $scope.newChoreText = null;
      // $scope.newChorePriority = null;
      // $scope.newChoreAssignee = null;
    }
    else {
      alert("Please Enter Chore");
    }
  }

    $scope.deleteChore = function(index){
      $scope.chores.splice(index, 1);
    };

    $scope.isPositive = function(chore) {
      // if (chore.indexOf("bad") == -1) {
      //   return true;
      // } else {
      //   return false;
      // }
      // 3 == "3" => true
      // 3 === "3" => false
      return (chore.indexOf("bad") == -1); 
    };

    // $scope.remove = function(chore){
    //  var index = $scope.chores.indexOf(chore);
    //   $scope.chores.splice(index, 1);  
    // };

    $scope.choreCompleted = function(chore) {
      chore.notCompleted = !chore.notCompleted;
    };


    $scope.choreCount = function() {
      var counter = 0
      for (var i = 0; i < $scope.chores.length; i++) {
        var chore = $scope.chores[i];
        if (chore.notCompleted == true) {
          counter++;
         }
      }
      return counter;
    };

    window.$scope = $scope;

  });

}) ();