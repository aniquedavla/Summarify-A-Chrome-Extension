
$(function() {
	//var $addSummary = $('#summary');
	// var $senten = $('#numberofSentences');
	var $urlT = $('#feed_url');
	// var $loading = $('#summary');
//form is submitted then it make the api call
$('#Data').submit(function(event) {
	console.log($urlT.val());
// ajax makes a GET call to sentisum passing in the url and api key as parameters
$.ajax({
	url: "https://api-2445581399224.apicast.io/api/v1/summarize?",
	type:"GET",
	data: {"sourceURL":$urlT.val(),"user_key":"32c37493e717e97d75b64d2a8145bdbb", "summaryPercent":"50"},
			//all summary appened to a div from json element
			success: function(data){
				console.log(data);
				$('#summary').append("Summary: "+data.summary);
				

				// $.each(data, function(i, val) {
				// 	console.log(val);
				// 	$('#summary').append(val);
				// });

			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			}
			
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
	
	event.preventDefault();


});

});