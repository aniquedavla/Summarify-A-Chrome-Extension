
$(function() {
	//var $addSummary = $('#summary');
	// var $senten = $('#numberofSentences');
	var $urlT = $('#feed_url');
	$("#data").submit(function(event) {
		console.log($urlT.val())
		$.ajax({
			url: "https://api-2445581399224.apicast.io/api/v1/summarize?",
			type:"GET",
			data: {"sourceURL":"http://www.bbc.com/news/world-asia-35940067","user_key":"32c37493e717e97d75b64d2a8145bdbb"},
			success: function(data){
				$.each(data, function(i, val) {
					$('#summary').append(val);
				});

			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			}
			event.preventDefault();
		});


	// 	$.ajax({
	// 		type : 'GET',
	// 		url : 'https://api-2445581399224.apicast.io/api/v1/summarize?',
	// 		data : requestSummary,
	// 		success:function(newSentences) {
	// 			console.log(newSentences);
	// 			// $addSummary.append('Summary:'+ newSentence.summary);
	// 		},
	// 		error:function(){
	// 			alert("NOT Summarizing, check the url or the internet!")
	// 		}
	// 	}); 

});

});