
$(function() { 
    var sentense = $('#numberOfSentences').val();
    var urlT = $('#feed_url').val();
    $('#form').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type : 'POST',
            url : 'https://textanalysis-text-summarization.p.mashape.com/text-summarizer-url',
            data : {
                sentnum: 'sentense',
                url:'urlT',
            }
        }); 
        $('#summary').append('sentenses')
    });
});
