$("button").click(function() {
    $("h1").css("color", "purple").css("text-align", "center").css("font-size", "5rem");
})

$(document).keypress(function(event) {
    $("h1").html(event.key);
})

$("button").on("mouseover", function() {
    $("button").css("background-color", "pink");
})