
var wins = 0;
var losses = 0;
var score = 0;
var target = Math.floor(Math.random() * 200 + 1);
var red = Math.floor(Math.random() * 9 + 1);
var blue = Math.floor(Math.random() * 9 + 1);
var yellow = Math.floor(Math.random() * 9 + 1);
var green = Math.floor(Math.random() * 9 + 1);

function restart() {
    score = 0;
    target = Math.floor(Math.random() * 200 + 1);
    red = Math.floor(Math.random() * 9 + 1);
    blue = Math.floor(Math.random() * 9 + 1);
    yellow = Math.floor(Math.random() * 9 + 1);
    green = Math.floor(Math.random() * 9 + 1);
};

$(".tar-score").html(target);

$(".red-crystal").on("click", function () {
    score += red;
    console.log(score);
    console.log("red");
    $(".u-score").html(score);
});

$(".blue-crystal").on("click", function () {
    score += blue;
    console.log(score);
    console.log("blue");
    $(".u-score").html(score);
});

$(".yellow-crystal").on("click", function () {
    score += yellow;
    console.log(score);
    console.log("yellow");
    $(".u-score").html(score);
});

$(".green-crystal").on("click", function () {
    score += green;
    console.log(score);
    console.log("green");
    $(".u-score").html(score);
});


if (score === target) {
    wins++;
    $(".wins").html("Wins: " + wins);
    restart();
}
else if (score > target) {
    losses++;
    $(".losses").html("Losses: " + losses);
    restart();
}

// $(".u-score").html(score);
