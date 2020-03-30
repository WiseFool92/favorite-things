

$(document).ready(function() {
  $("form#fav").submit(function(event){
    event.preventDefault();
    // Grab user data from DOM and store it in variables
    var animal = $('.animal').val();
    var child = $('.child').val();
    var adult = $(".adult").val();
    // console.log("animal: " + animal);
    // console.log("child: " + child);
    // console.log("adult: " + adult);
    // Console.log() those vars

    // Put them into an array
     var yourFavorites = [".animal", ".child", ".adult"];
    // console.log(yourFavorites);
     
     // display them on the DOM
  });
});

