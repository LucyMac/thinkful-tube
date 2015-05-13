$(function(){     
	var youTubeAPI = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(youTubeAPI, function(data){
    	part: 'snippet'
    	key: 'AIzaSyAqGGJTTcrXv0OppL-uc0WzN_GZOMajB9Q'
    	q: $('#query').val();
	})
	.done(function(data){
		console.log(data);
	});
});