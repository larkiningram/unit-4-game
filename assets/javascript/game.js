
var score = 0;
var red = Math.floor(Math.random() * 9 + 1);
var blue = Math.floor(Math.random() * 9 + 1);
var yellow = Math.floor(Math.random() * 9 + 1);
var green = Math.floor(Math.random() * 9 + 1);


$(".red-crystal").on("click", function(){
    score += red;
});

$(".blue-crystal").on("click", function(){
    score += blue;
});

$(".yellow-crystal").on("click", function(){
    score += yellow;
});

$(".green-crystal").on("click", function(){
    score += green;
});