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
				console.log(value);
			});
		});
	});
});


//create node, insert jpeg, link it to url

	var node = document.createElement("div");         
	var thumbnail = document.createTextNode("Buzzy");
	node.appendChild(thumbnail);
	document.getElementById("search-results").appendChild(node);

