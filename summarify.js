
$(function() {
	var $addSummary = $('#summary');
	var $senten = $('#numberofSentences');
	var $urlT = $('#feed_url');
	$('#data').submit(function() {
		var requestSummary = {
			"X-Mashape-Key":"CGp60L3DxfmshySTedqMew6HxqXpp1RW8nHjsnLrto8lHz6WK3",
			"Content-Type": "application/x-www-form-urlencoded",
			"Accept": "application/json",
			"sentnum": $senten.val(),
			"url": $urlT.val(),
		}
		$.ajax({
			type : 'POST',
			url : 'https://textanalysis-text-summarization.p.mashape.com/text-summarizer-url',
			data : requestSummary,
			success:function(newSummary) {
				$addSummary.append('Summary:'+newSummary.sentences[0])
			},
			error:function(){
				alert("NOT Summarizing, check the url or the internet!")
			}
		}); 
	});
	
});