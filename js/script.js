$(document).ready(function(){

	$(function(){
    $(".btn").click(function(e){
        e.preventDefault();
         $('.image').attr("src",$(this).data("img"));   
        $('.h5').text($(this).data("head"));
        $('.p').text($(this).data("txt"));    
    });
});
})
