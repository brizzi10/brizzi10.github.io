(function() {
  angular.module('benbrizzi')
  .directive('home', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/home.html'
    };
  })
  .directive('homeContent', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/home-content.html'
    };
  })
  .directive('portfolio', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/portfolio.html'
    };
  })
  .directive('portfolioContent', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/portfolio-content.html'
    };
  })
  .directive('project1', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/project1.html'
    };
  })
  .directive('project2', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/project2.html'
    };
  })
  .directive('project3', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/project3.html'
    };
  })
  .directive('contact', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/contact.html'
    };
  })
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/templates/navbar.html'
    };
  })
}());
