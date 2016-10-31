(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunchStr = "";
  $scope.lunchMsg= "";
  $scope.checkToMuch = function(){
      var numItems = calcLunchItems($scope.lunchStr)
      $scope.lunchMsg = numItems == 0 ? "Please enter data first!" :
                        numItems <= 3 ? "Enjoy!" : "Too Much!";
  };
  function calcLunchItems(str){
      var val;
      if(str !== ""){
          val = (str.split(",")).length;
      }else{
          val = 0;
      }
      return val;
  }
}
})();