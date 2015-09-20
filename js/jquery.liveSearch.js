var delay = (function(){
    var timer = 0;
    return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
    };
})()

$('#my-input').keyup(function(){
    var src = $(this).val();
    var len = src.length;
       
     delay(function(){ liveSearch(src, len) }, 1000);   
});

$('#my-input').blur(function(){
    $('#results').fadeOut();
});

$('#my-input').focus(function(){
    var src = $(this).val();
    var len = src.length;
    
    if($('#results').html() != '' && (src != '' && len >= 3)){
        $('#results').fadeIn();
    } else if($('#results').html() == '') {
        liveSearch(src, len);
    }
});

function liveSearch(src, len){
    if(src == "" || len <= 3){
    	$('#results').fadeOut();
    } else {
        $.ajax({
            type: "GET",
            url: "search_results.php",
            data: { "q": src },
            cache: false,
            beforeSend: function() {
                $('#results').fadeIn();
                $('#results').text("Loading...");
            },
            success: function (data) {
                $('#results').html(data);
                $('#results').fadeIn();
            }
        });
    }
}