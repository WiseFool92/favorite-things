

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

    // var myArr = [];
    // myArr.push("1");
    // myArr.push("2");

     var yourFavorites = [];
      yourFavorites.push(animal);
      yourFavorites.push(child);
      yourFavorites.push(adult);
    // console.log(yourFavorites);

     $("#animal").text(yourFavorites[0]);
     $("#child").text(yourFavorites[1]);
     $("#adult").text(yourFavorites[2]);    
     // display them on the DOM
   

  });
});

