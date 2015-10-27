/**
 * Created by qh4r on 27.10.15.
 */
angular.module('test', []);
angular.module('test').controller('baseCtrl', ['$scope', function ($scope) {

  io.socket.get('/things', function (data) {
    $scope.things = data;
    $scope.$apply();
  });

  io.socket.on('things', function (event) {
    switch (event.verb) {
      case 'created':
        $scope.things.push(event.data);
        $scope.$apply();
        break;
    }
  })

  //$scope.things = [{
  //  id: 1,
  //  text: '=]'
  //}, {
  //  id: 2,
  //  text: '=('
  //}, {
  //  id: 3,
  //  text: '-_-'
  //}, {
  //  id: 4,
  //  text: '=3'
  //}, {
  //  id: 5,
  //  text: ';c'
  //}, {
  //  id: 6,
  //  text: '^_^'
  //},];
}]);
