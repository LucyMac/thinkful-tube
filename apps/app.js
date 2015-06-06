$(function(){     
	var youTubeAPI = 'https://www.googleapis.com/youtube/v3/search';
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		$.getJSON(youTubeAPI, {
	    	part: 'snippet',
	    	key: 'AIzaSyAqGGJTTcrXv0OppL-uc0WzN_GZOMajB9Q',
	    	q: searchTerm
		}, function(data){
        	$.each(data.items, function(index, value){
				$('search-results').html('<a href=' + '"https://www.youtube.com/watch?v=' + items.id.videoId + '"><img src=' + items.snippet.thumbnails.medium.url + '/></a>');
			});
		});
	});
});



