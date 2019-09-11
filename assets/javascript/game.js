
var wins = 0;
var losses = 0;
var score = 0;
var target = Math.floor(Math.random() * 101 + 19);;
var red = Math.floor(Math.random() * 11 + 1);
var blue = Math.floor(Math.random() * 11 + 1);
var yellow = Math.floor(Math.random() * 11 + 1);
var green = Math.floor(Math.random() * 11 + 1);

function restart() {
    score = 0;
    target = Math.floor(Math.random() * 101 + 19);
    red = Math.floor(Math.random() * 11 + 1);
    blue = Math.floor(Math.random() * 11 + 1);
    yellow = Math.floor(Math.random() * 11 + 1);
    green = Math.floor(Math.random() * 11 + 1);
    $(".wins").html(wins);
    $(".losses").html(losses);
    $(".tar-score").html(target);
    $(".u-score").html(score);
};

restart();

function checker() {
    if (score == target) {
        wins++;
        console.log("Win");
        console.log(wins);
        restart();
    }
    else if (score > target) {
        losses++;
        console.log("Loss");
        restart();
    }
};

function game() {
    $(".red-crystal").on("click", function () {
        score += red;
        // console.log(score);
        // console.log("red");
        $(".u-score").html(score);
        checker();
    });

    $(".blue-crystal").on("click", function () {
        score += blue;
        // console.log(score);
        // console.log("blue");
        $(".u-score").html(score);
        checker();

    });

    $(".yellow-crystal").on("click", function () {
        score += yellow;
        // console.log(score);
        // console.log("yellow");
        $(".u-score").html(score);
        checker();

    });

    $(".green-crystal").on("click", function () {
        score += green;
        // console.log(score);
        // console.log("green");
        $(".u-score").html(score);
        checker();

    });
    console.log(score);
};



game();
