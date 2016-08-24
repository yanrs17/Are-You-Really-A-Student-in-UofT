/* Created by Ryan Ruoshui Yan on Aug 13, 2016 */

// A template for other people to modify directly
// 一個模板, 適合其他人直接修改

/* Shuffle the array. */
// 答案隨機化
function shuffle(a) {
    var i, j, x;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

/* Get start page */
// 轉到開始頁面
$(document).ready(function() {
    $('img').hide();
    $('button').hide();
    $('#start').show();
    // $('#bottom').hide();
    $('#start').html(START);
});

/* Start */
// 轉到選項頁面
$('#start').click(function() {

    if ($('#start').html() == START) {
        shuffle(options);
        $('img').show();
        $('button').show();
        $('#start').hide();
        $('#author').hide();
        window.questionNum = 0;
        window.score = 0;
        apply();
    } else {
        location.reload(true);
    }
});

/* Next page */
// 轉到下個選項
$("#next").click(function() {
    if ($("#" + options[questionNum-1]["answer"]).attr("class") == "active") {
        score += SCORE_CORRECT_ANSWER;
    } else {
        score -= SCORE_WRONG_ANSWER;
    }
    console.log(score);
    if (questionNum < MAX_QUESTIONS) {
        apply();
    } else {
        $('img').hide();
        $('button').hide();
        $('#bottom').hide();
        $('#author').show();
        $('#author').html(YOUR_SCORE + ": " + score + "<br/>" + report[score]);
        $('#startbtn').show();
        $('#start').show();
        $('#start').html(RESTART);
    }
});

/* Select the button */
/* This function must be after $("#next")
    Otherwise the score cannot be shown properly. */
// 選擇答案
$('button').click(function() {
    if ($(this).attr('class') == 'active') {
        $(this).removeAttr('class');
    } else if ($(this).attr('class') == undefined) {
        $('button').removeAttr('class');
        $(this).attr('class', 'active');
    }
    $('#next').removeAttr('class');
});

// 顯示的題目數量
// 注意: 如果全部都顯示, 就改成 MAX_QUESTIONS = options.length;
// 注意: 數字不可超過問題最大個數, 否則會報錯
MAX_QUESTIONS = options.length;

/* Apply questions */
// 將選中的題目的圖片以及四個選項應用到頁面上
function apply() {

    $('#img').attr("src", options[questionNum]["img"]);
    $('#option1').html(options[questionNum]["option1"]);
    $('#option2').html(options[questionNum]["option2"]);
    $('#option3').html(options[questionNum]["option3"]);
    $('#option4').html(options[questionNum]["option4"]);
    $('#next').html(NEXT);
    questionNum ++;

    if (questionNum == MAX_QUESTIONS) {
        $('#next').html(FINISH);
    }
    $('#bottom').html(questionNum + " in " + MAX_QUESTIONS);
}
