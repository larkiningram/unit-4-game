
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

function click() {
    $(".red-crystal").on("click", function () {
        score += red;
        // console.log(score);
        // console.log("red");
        $(".u-score").html(score);
    });

    $(".blue-crystal").on("click", function () {
        score += blue;
        // console.log(score);
        // console.log("blue");
        $(".u-score").html(score);
    });

    $(".yellow-crystal").on("click", function () {
        score += yellow;
        // console.log(score);
        // console.log("yellow");
        $(".u-score").html(score);
    });

    $(".green-crystal").on("click", function () {
        score += green;
        // console.log(score);
        // console.log("green");
        $(".u-score").html(score);
    });
    console.log(score);
};

function game() {
    if (target > score) {
        click();
    }
    else if (score == target) {
        wins++;
        console.log("Win");
        console.log(wins);
        $(".wins").html("Wins: " + wins);
        restart();
    }
    else {
        losses++;
        console.log("Loss");
        $(".losses").html("Losses: " + losses);
        restart();
    }
};

game();
