$(document).ready(function(){
  $("body").addClass("light");
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light");
  });
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark");
  });

});