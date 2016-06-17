// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('form', {
        url: 'form',
        templateUrl: 'MultiForm/form',
        controller: 'formController'
    })
    .state('form.profile', {
        url: '/formProfile',
        templateUrl: 'MultiForm/formProfile'
    })
    .state('form.interests', {
        url: '/formInterests',
        templateUrl: 'MultiForm/formInterests'
    })
    .state('form.payment', {
        url: '/formPayment',
        templateUrl: 'MultiForm/formPayment'
    });
    $urlRouterProvider.otherwise('/form/formProfile');
}])
// our controller for the form
// =============================================================================
.controller('formController', function ($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function () {
        alert('awesome!');
    };

});