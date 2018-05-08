$ ( () => {

$(".container").hide().delay(1200).fadeIn(400);


$("table").click(function(){
    $("container").toggle();
});

$(document).ready(function(){
    $("formsheet").hide();
}


 <button onclick="myFunction()">Click me</button> 


$("table").click();

$(":button").click(function(){
    $(".formsheet").hide();
});

$("formsheet").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
});

class table {
    constructor(){
        this.available = true;
    }
    Open: "Available",
    Closed: "Reserved"
    }

    // $(table).toggle(speed,easing,callback)









});