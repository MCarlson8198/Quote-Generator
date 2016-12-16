$(document).ready(function(){
  $(".button1").click(function() {
var classes = ['red1', 'blue', 'ltblue', 'tan', 'salmon', 'red2', 'red3', 'red4', 'red5', 'red6'];
var randomnumber = Math.floor(Math.random() * classes.length);
if($(this).text() === "New Quote")
{
    var $color = classes[randomnumber];
    $("#body").removeClass(classes.join(' '));
    $("#body").addClass($color);

}



  });


  $(".button1").click(function() {
var quotes = [' A room without books is like a body without a soul. - Marcus Tullius Cicero', ' Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. - Albert Einstein ', ' Be yourself; everyone else is already taken. - Oscar Wilde', ' Don\'t cry because it\'s over, smile because it happened. - Dr. Seuss', ' The only way to make sense out of change is to plunge into it, move with it, and join the dance. - Alan Watts ', 'In three words I can sum up everything I\'ve learned about life: it goes on. - Robert Frost', 'No one can make you feel inferior without your consent. - Eleanor Roosevelt', 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .” - CS Lewis', 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals. - JK Rowling'];
var randomquote = Math.floor(Math.random() * quotes.length);
if($(this).text() === "New Quote")
{
    $("h3").empty();
    $("h3").append(quotes[randomquote]);
}


});



});

function tweet() {
  var url = "https://twitter.com/intent/tweet";
  var text = document.getElementById("quotable").innerHTML;
  console.log(text);
  window.open(url + "?text="+text);
}



/*
 $(".fa-twitter-square").css({'color':classes[randomnumber]});
}
*/  
