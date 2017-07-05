'use strict';

albasoftApp.controller('apropoController', ['$scope','apropoService',

    function ($scope, apropoService) {
	    $scope.$parent.initMenuStyle();
        $scope.$parent.apropos = 'linkItem current-menu-item';

		$scope.stApropos = {"background-image":"url(img/solutions1.jpg)",
		"background-repeat":"no-repeat",
		 "background-size": "100% 100%"};
		 
        $scope.aproposResult = apropoService.getPropos()
            .then(function (propos) {
                $scope.aproposResult = propos;
            }, function (msg) {
                alert(msg);
            });

    }

]);