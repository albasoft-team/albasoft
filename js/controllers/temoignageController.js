'use strict';

albasoftApp.controller('temoignageController',['$scope','temoignageService',

    function ($scope, temoignageService) {
       	$scope.$parent.initMenuStyle();
        $scope.$parent.temoignage = 'linkItem current-menu-item';
		$scope.stTemoin = {"background-image":"url(img/temoignage.jpg)",
		"background-repeat":"no-repeat",
		 "background-size": "100% 100%"};
        $scope.temoignages = temoignageService.getTemooignages()
            .then(function (temoignages) {
                $scope.temoignages = temoignages;
            }, function (msg) {

                alert(msg);
            });

    }
]);