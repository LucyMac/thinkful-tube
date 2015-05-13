$(document).ready(function(){

	$.getJSON('https://www.googleapis.com/youtube/v3/search', function(data){
    	myData = data.Search;
    	$.each(myData, function(index,value){
			console.log(value.Title);
		});
	}, 'AIzaSyAqGGJTTcrXv0OppL-uc0WzN_GZOMajB9Q', $('query').val()
	);
});