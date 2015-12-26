angular.module('yangular')
	.factory('dfyoutube',function($http, YANGULAR_YT_API_KEY) {
		 var factory = {
		 	videos: getVideos,
		 	video: getVideo
		 };
		 return factory;



		 // function to retrive all video by keyword
		 function  getVideos(search, page) {
		 		//https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyC7Iz2xcxzqeJCYZHK8NlMH56plQ_RqwrA&q=angular
		 		//return http promess
		 		return $http({
			 			method: 'GET',
			 			url: 'https://www.googleapis.com/youtube/v3/search',
			 			params: {
			 				part: 'snippet',
			 				type: 'video',
			 				maxResults: 12,
			 				key: YANGULAR_YT_API_KEY,
			 				pageToken: page || '',
			 				q: search
			 			}
			 		});
		 }

		 // function to retrive single video by ID
		 function getVideo(id) {
		 	//https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY&part=snippet,contentDetails,statistics,status
		 }
	})