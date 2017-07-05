'use strict';

albasoftApp.controller('topController',['$scope',

    function ($scope) {
        $scope.initMenuStyle = function(){
        $scope.acceuil = 'linkItem';
        $scope.apropos = 'linkItem';
        $scope.service = 'linkItem';
        $scope.temoignage = 'linkItem ';
        $scope.contact = 'linkItem ';
		};
		$scope.initMenuStyle();

}]);

