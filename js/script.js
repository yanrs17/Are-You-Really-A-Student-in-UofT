/* Created by Ryan Ruoshui Yan on Aug 13, 2016 */

/* Questions */
options = [
{
    img: "img/ba1.jpeg",
    option1: "程序员聚眾写码的神秘建筑",
    option2: "很多书的禽类形状建筑",
    option3: "又绿又圆的集会场所",
    option4: "衣服穿得很少的地方",
    answer: "option1",
    description: "Bahen Centre"
},
{
    img: "img/Ch1.jpeg",
    option1: "松鼠成灾的椭圆状公园",
    option2: "马猴烧酒晒太阳的地方",
    option3: "又绿又圆的集会场所",
    option4: "衣服穿得很少的地方",
    answer: "option3",
    description: "Con Hall"
},
{
    img: "img/GERs.jpg",
    option1: "寂静的UofT",
    option2: "理科生泡馆首选",
    option3: "距离安大略湖最近的校门",
    option4: "社团摆booth最多的地方",
    answer: "option2",
    description: "Gerstein Library"
},
{
    img: "img/MP.jpeg",
    option1: "社团摆booth最多的地方",
    option2: "物理实验室的所在地",
    option3: "衣服穿得很少的地方",
    option4: "离死亡最近的地方",
    answer: "option2",
    description: "MP"
},
{
    img: "img/RB.jpg",
    option1: "离死亡最近的地方",
    option2: "最有钱College的图书馆",
    option3: "很多书的禽类形状建筑",
    option4: "玻璃非常非常大的场馆",
    answer: "option3",
    description: "Robarts Library"
},
{
    img: "img/qp.jpg",
    option1: "寂静的UofT",
    option2: "衣服穿得很少的地方",
    option3: "松鼠成灾的椭圆形",
    option4: "程序员聚眾写码的神秘建筑",
    answer: "option3",
    description: "Queens Park"
},
{
    img: "img/GR.jpg",
    option1: "离死亡最近的地方",
    option2: "社团摆booth最多的地方",
    option3: "很多书的禽类形状建筑",
    option4: "与大玻璃一起运动",
    answer: "option4",
    description: "Goldring"
},

{
    img: "img/EC.jpg",
    option1: "离死亡最近的地方",
    option2: "寂静的UofT",
    option3: "很多书的禽类形状建筑",
    option4: "life sci小朋友经常出没的高级会所",
    answer: "option1",
    description: "Exam Centre"
},
{
    img: "img/kc.jpg",
    option1: "离死亡最近的地方",
    option2: "不如跳舞的空旷场地",
    option3: "很多书的禽类形状建筑",
    option4: "Earth Science Centre",
    answer: "option2",
    description: "King's Circle"
},
{
    img: "img/AC.jpg",
    option1: "离死亡最近的地方",
    option2: "寂静的UofT",
    option3: "不如跳舞的空旷场地",
    option4: "衣服穿得很少的地方",
    answer: "option4",
    description: "Athelic Centre"
},
]

/* Shuffle the array */
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
$(document).ready(function() {
    $('img').hide();
    $('button').hide();
    $('#start').show();
    $('#score').hide();
});

/* Start */
$('#start').click(function() {
    shuffle(options);
    $('img').show();
    $('button').show();
    $('#start').hide();
    $('#score').hide();
    window.questionNum = 0;
    window.score = 0;
    apply();
});

/* Next page */
$("#next").click(function() {
    if ($("#" + options[questionNum-1]["answer"]).attr("class") == "active") {
        score += 10;
    }
    console.log(score);
    if (questionNum < options.length) {
        apply();
    } else {
        $('img').hide();
        $('button').hide();
        $('#score').show();
        $('#score').html("Your score: " + score);
        $('#start').show();
        $('#start').html("RESTART!");
    }
});

/* Select the button */
/* This function must be after $("#next")
    Otherwise the score cannot be shown properly. */
$('button').click(function() {
    if ($(this).attr('class') == 'active') {
        $(this).removeAttr('class');
    } else if ($(this).attr('class') == undefined) {
        $('button').removeAttr('class');
        $(this).attr('class', 'active');
    }
    $('#next').removeAttr('class');
});

/* Apply questions */
function apply() {

    $('#img').attr("src", options[questionNum]["img"]);
    $('#option1').html(options[questionNum]["option1"]);
    $('#option2').html(options[questionNum]["option2"]);
    $('#option3').html(options[questionNum]["option3"]);
    $('#option4').html(options[questionNum]["option4"]);
    $('#next').html("NEXT");
    // $('#next').removeAttr('class');
    questionNum ++;

    if (questionNum == options.length) {
        $('#next').html("FINISH");
    }
}
