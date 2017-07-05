'use strict';

albasoftApp.controller('homeController',['$scope','homeService','$rootScope','$state', '$stateParams',

    function ($scope, homeService, $rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $scope.isHome = true;

		$scope.$parent.initMenuStyle();
        $scope.$parent.acceuil = 'linkItem current-menu-item';

        $scope.stAccueil = {"background-image":"url(img/informatique.jpg)",
		"background-repeat":"no-repeat",
		 "background-size": "100% 100%"};
        $rootScope.loading = true;
        $scope.resultData = homeService.getHeaderBody()
            .then(function (content) {
                $scope.resultData = content.data;
                $rootScope.loading = false;
            }, function (msg) {
                alert(msg);
            });
        $scope.headerNavbar = homeService.getMenu()
            .then(function (menu) {
                $scope.headerNavbar = menu.data;
                $rootScope.loading = false;
            }, function (msg) {

                alert(msg);
        });

}]);

