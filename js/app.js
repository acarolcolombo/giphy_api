console.log("test");

function getData(){

    var input = $("#searchtext").val()  
 
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=ae7fnSFgzsOHkQqheknQrgdOvrl8HerX&limit=30");
 
   
 
     xhr.done(function(response) { 
 
     console.log("success got data", response); 
 
 
 
     var giphs = response.data;
 
     
 
 for (i in giphs){
 
     $('#inner').append("<img src='"+giphs[i].images.original.url+"'>");
 
     }   
 
   });
 
 }