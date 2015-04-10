'use strict';

angular.module('angularFullstack1App')
  .controller('MainCtrl', function ($scope, $http, $log) {
    $scope.awesomeThings = [];
    $scope.index = -1;

    var update = function() {
      $http.get('/api/things').success(function (awesomeThings) {
        $scope.awesomeThings = awesomeThings;
      });
    };
    update();

    $scope.setNew = function() {
      $scope.index = -1;
      $scope.name = '';
      $scope.info = '';
    };

    $scope.create = function() {
      var params = {
        'name': $scope.name,
        'info': $scope.info
      };
      $http.post('/api/things', params)
      .success(function(data){
        $log.debug('data', data);
        update();
      });
    };

    $scope.select = function(index) {
      $scope.index = index;
      var thing = $scope.awesomeThings[index];
      $scope.name = thing.name;
      $scope.info = thing.info;
    };

    $scope.update = function() {
      if($scope.index>=0) {
        var params = {
          'name': $scope.name,
          'info': $scope.info
        };
        $http.put('/api/things/' + $scope.index, params)
        .success(function(data){
          $log.debug('data', data);
          update();
        });
      }
    };

    $scope.delete = function(index) {
      $http.delete('/api/things/'+index)
      .success(function(data){
        $log.debug('data', data);
        update();
      });
    };
  });
