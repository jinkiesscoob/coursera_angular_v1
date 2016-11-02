(function () {
'use strict';

angular.module('LunchCheck', [])
 .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  //initialize variables
  $scope.listInput = "";
  $scope.messageStyle = "color: Red;"; //input is empty
  var messageborder = "border: 1px solid; padding: 10px;";

  $scope.CheckList = function () {
    var elements = cleanArray($scope.listInput.split(","));

    if(elements.length == 0) {
      $scope.messageStyle = "color: Red;" + messageborder;
      $scope.outputMessage = "Please enter data first";
    } else {
      $scope.messageStyle = "color: Green;" + messageborder;
      $scope.outputMessage = ((elements.length > 3) ? "Too much!" : "Enjoy!");
    }
  }
}

function cleanArray(elem) {
  var newArray = new Array();
  for(var i=0; i < elem.length; i++) {
    if(elem[i] != "") {
      newArray.push(elem[i]);
    }
  }
  return newArray;
}

})();
