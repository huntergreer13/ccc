
//https://beta.ourmanna.com/api/v1/get/?format=text
//https://beta.ourmanna.com/api/v1/get/?format=text&order=random

$(document).ready(function() {

  //Get today's bible verse
  $.ajax({ type: "GET",
           url: "https://beta.ourmanna.com/api/v1/get/?format=text",
           async: false,
           success : function(text)
           {
             var verse1 = text.split(" - ")[0];
             var location1 = text.split(" - ")[1];
             console.log("Verse 1: " + verse1 + "\nLocation: " + location1);
             $(".bibleVerse1").empty();
             $(".bibleVerse1").append("<blockquote><p>&ldquo;" + verse1 + "&rdquo;</p><span>" + location1 + "</span>");
           }
  });

  //Get random bible verses
  $.ajax({ type: "GET",
           url: "https://beta.ourmanna.com/api/v1/get/?format=text&order=random",
           async: false,
           success : function(text)
           {
             var verse2 = text.split(" - ")[0];
             var location2 = text.split(" - ")[1];
             console.log("Verse 2: " + verse2 + "\nLocation: " + location2);
             $(".bibleVerse2").empty();
             $(".bibleVerse2").append("<blockquote><p>&ldquo;" + verse2 + "&rdquo;</p><span>" + location2 + "</span>");
           }
  });

  $.ajax({ type: "GET",
           url: "https://beta.ourmanna.com/api/v1/get/?format=text&order=random",
           async: false,
           success : function(text)
           {
             var verse3 = text.split(" - ")[0];
             var location3 = text.split(" - ")[1];
             console.log("Verse 3: " + verse3 + "\nLocation: " + location3);
             $(".bibleVerse3").empty();
             $(".bibleVerse3").append("<blockquote><p>&ldquo;" + verse3 + "&rdquo;</p><span>" + location3 + "</span>");
           }
  });

  $('.flexslider').flexslider({
    animation: "slide"
  });

});
