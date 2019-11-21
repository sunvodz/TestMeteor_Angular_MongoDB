import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Mongo } from 'meteor/mongo';
angular.module('my-simple-app', [
    angularMeteor
]);

Router.route('users', function () {
  this.render('Home', {
    data: function () { return User.findOne({_id: this.params._id}); }
  });
});

      
User = new Mongo.Collection('User');
 
if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor']);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
 
      $scope.users = $meteor.collection(User);

      $scope.addUser = function (newUserName,newUserPassword) {
        $scope.users.push( {
          UserName: newUserName,
          UserPassword: newUserPassword }
        );
      };

      
      console.log("show user",$scope.users);
    }]);

    
}