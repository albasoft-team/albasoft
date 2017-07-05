
albasoftApp.controller('contactController',['$scope','$http', '$state',

    function ($scope, $http, $state) {

	    $scope.$parent.initMenuStyle();
        $scope.$parent.contact = 'linkItem current-menu-item';
		
		 $scope.stContact = {"background-image":"url(img/bandeau-contact1.jpg)",
		"background-repeat":"no-repeat",
		 "background-size": "100% 100%"};

		$scope.formData = {};
		$scope.MessagesInfo = [];
		$scope.contactManager = function () {
			$scope.MessagesInfo.splice(0,$scope.MessagesInfo.length);
			$http({
				method : 'post',
				url : 'contact.php',
				data : {
					subject : $scope.formData.Subject,
					company : $scope.formData.Company,
					email : $scope.formData.Email,
					message : $scope.formData.Message
				}
			}).then(function (data, status, headers, config) {
					$state.go('home');
			},(function (resonse){
                // console.log(resonse);
				$scope.MessagesInfo = [];
				_.forEach(resonse.message, function(item) {
					console.log(item);
					$scope.MessagesInfo.push(item);
				});
				return;
			}))
		}

}]);