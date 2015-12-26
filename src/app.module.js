angular.module('yangular', [])
	.controller('homeCtrl', ['$scope','YANGULAR_SEARCH_RESULT_ID','dfyoutube',function($scope,searchResultID,dfyoutube) {
		// initialisation
		$scope.df_search = '';
		$scope.videos = [];
		$scope.page = '';

		// method
		$scope.searchVideo = function() {
			if($scope.df_search.trim() !== '') {
				initValue();
				var promesseYoutube = dfyoutube.videos($scope.df_search);
				promesseYoutube.then(function(response){
					$scope.videos = response.data.items  || [];
					$scope.page = response.data.nextPageToken;
				})
				.catch(showerror);
			}
		}

		$scope.pagination = function() {
			if($scope.page) {

				var promesseYoutube = dfyoutube.videos($scope.df_search,$scope.page);
				promesseYoutube.then(function(response){
					$scope.videos = $scope.videos.concat(response.data.items  || []);
					$scope.page = response.data.nextPageToken;
				})
				.catch(showerror);
			}
		};


		initValue();




		function initValue() {
			$scope.videos = [];
			$scope.page = '';
		}
	}]);




function showerror() {

};