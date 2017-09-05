// Code goes here
var app = angular.module('computer',['ngRoute'])

          .config(['$routeProvider',function($routeProvider){
              $routeProvider.
                when('/main',{
                  templateUrl: 'main.html',
                  controller:'MainCtrl'
                }).
                when('/projects',{
                  templateUrl: 'projects.html',
                  controller:'ProjectCtrl'
                }).
                when('/services',{
                  templateUrl: 'services.html',
                  controller:'servicesCtrl'
                }).
                when('/about',{
                  templateUrl:'about.html'
                }).
                when('/contact',{
                  templateUrl: 'contact.html',
                  controller:'ContactCtrl'
                }).
                
                otherwise({redirectTo:'/main'})
          }])
          
          .controller('MainCtrl',['$scope','$http',function($scope,$http){
              $scope.person = 'Jon Dow'
              console.log($scope);
              $http.get('services.json')
                   .then(function(response){
                      $scope.services = response.data;
                   });
          }])
          .controller('ProjectCtrl',['$scope',function($scope){
             
              console.log('ProjectCtrl');
          }])
          .controller('servicesCtrl',['$scope','$http',function($scope,$http){
              console.log('servicesCtrl');
              $http.get('services.json')
                   .then(function(response){
                      $scope.services = response.data;
                   });
                    
          }])
          .controller('ContactCtrl',['$scope','$http',function($scope,$http){
              console.log('ContactCtrl');
              $http.get('location.json')
                   .then(function(response){
                      $scope.locations = response.data;
                   });
              
          }])
          
          
          