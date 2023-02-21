$(document).ready(function(){
    $(".bi-search").click(function(){
        $("#input").slideToggle("slow");
    });

    $(".bi-search").click(function(){
        $("#btn").slideToggle("slow");
    });

    $(".bi-cart").click(function(){
        $(".card-item").slideToggle(2000);
    });

    $(".btn-danger").click(function(){
        $(".para").toggle(2000);
    });

    $("#menu .card button").click(function(){
        alert("Buying successfully");
    });

    $("#product .card button").click(function(){
        alert("Buying successfully");
    });

    
});