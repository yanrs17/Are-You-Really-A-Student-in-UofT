options = [
{
    img: "img/ba1.jpeg",
    option1: "程序员聚眾写码的神秘建筑",
    option2: "很多书的禽类形状建筑",
    option3: "又绿又园的集会场所",
    option4: "衣服穿得很少的地方",
    answer: "程序员聚眾写码的神秘建筑"
},
{
    img: "img/Ch1.jpeg",
    option1: "松鼠成灾的椭圆状公园",
    option2: "马猴烧酒晒太阳的地方",
    option3: "又绿又园的集会场所",
    option4: "衣服穿得很少的地方",
    answer: "又绿又园的集会场所"
},
{
    img: "img/GR.jpeg",
    option1: "寂静的UofT",
    option2: "理科生泡馆首选",
    option3: "距离安大略湖最近的校门",
    option4: "社团摆booth最多的地方",
    answer: "option11"
},
{
    img: "img/MP.jpeg",
    option1: "社团摆booth最多的地方",
    option2: "物理实验室的所在地",
    option3: "衣服穿得很少的地方",
    option4: "离死亡最近的地方",
    answer: "物理实验室的所在地"
},
{
    img: "img/EJ.jpeg",
    option1: "离死亡最近的地方",
    option2: "最有钱College的图书馆",
    option3: "很多书的禽类形状建筑",
    option4: "Earth Science Centre",
    answer: "很多书的禽类形状建筑"
},
{
    img: "img/jjduoft.jpeg",
    option1: "寂静的UofT",
    option2: "衣服穿得很少的地方",
    option3: "松鼠成灾的椭圆状公园",
    option4: "程序员聚眾写码的神秘建筑",
    answer: "社团摆booth最多的地方"
},
{
    img: "img/ES.jpeg",
    option1: "离死亡最近的地方",
    option2: "寂静的UofT",
    option3: "很多书的禽类形状建筑",
    option4: "Earth Science Centre",
    answer: "Earth Science Centre"
},
]

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var i, j, x;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

$(document).ready(function() {

    $('img').hide();
    $('button').hide();
    $('#start').show();
    shuffle(options);
    window.questionNum = 0;
});

$('button').click(function() {

    if ($(this).attr('class') == 'active') {
        $(this).removeAttr('class');
    } else if ($(this).attr('class') == undefined) {
        $('button').removeAttr('class');
        $(this).attr('class', 'active');
    }
});

$('#start').click(function() {

    $('img').show();
    $('button').show();
    $('#start').hide();
    apply();
});

$("#next").click(function() {
    if (questionNum < options.length) {
        apply();
    } else {
        $('img').hide();
        $('button').hide();
        $('#start').show();
        $('#start').html("RESTART!");
    }
});

function apply() {

    $('#img').attr("src", options[questionNum]["img"]);
    $('#opt1').html(options[questionNum]["option1"]);
    $('#opt2').html(options[questionNum]["option2"]);
    $('#opt3').html(options[questionNum]["option3"]);
    $('#opt4').html(options[questionNum]["option4"]);
    $('#next').html("NEXT");
    $('#next').removeAttr('class');
    questionNum ++;

    if (questionNum == options.length) {
        $('#next').html("FINISH");
    }
}
