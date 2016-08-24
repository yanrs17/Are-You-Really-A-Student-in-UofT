/* Created by Ryan Ruoshui Yan on Aug 13, 2016 */

var caidan = 0;

/* Functions */

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

    shuffle(options);
    images = [];
    var k;

    var imageobj = new Image();
    imageobj.src = options[0]["img"];
    images.push(imageobj);



    $('img').hide();
    $('div#author').hide();
    $('button').hide();
    // $('#ada_logo').attr('src', 'img/ada1.png');


    /* Start landing page animation. */
    var fade = document.querySelector('.fade');
    var image = document.getElementsByTagName('img')[0];
    var author = document.querySelector('#author');
    var aquarelle = new Aquarelle(image, 'img/mask.png', {
        autoplay: true,
        loop: true
    });

    aquarelle.addEventListener('created', function() {
        var canvas = this.getCanvas();
        canvas.removeAttribute('style');
        image.parentNode.insertBefore(canvas, image.nextSibling);
        image.parentNode.removeChild(image);
    });

    aquarelle.addEventListener('changed', function(event) {
        setTimeout(function(){
            aquarelle.pause();
            $('#start').show();
            $('#start').html(START);
        }, 6200);

        $('div#author').show();
        fade.style.opacity = this.transitionInRange(1, 0, 7183, 7933);

        var canvas = this.getCanvas();
        canvas.style.webkitFilter = 'blur(' + this.transitionInRange(0, 24, 3000) + 'px)';
        canvas.style.webkitTransform = canvas.style.transform = 'translate(-50%, -100%) scale(' + this.transitionInRange(.75, 1) + ')';

        author.style.opacity = this.transitionInRange(0, 1, 0, 2016);
        author.style.webkitTransform = author.style.transform = 'scale(' + this.transitionInRange(.5, 1, 0, 5883) + ')';

    });
    // $('#start').show();
    // $('#start').html(START);
});

/* Start */
// 轉到選項頁面
$('#start').click(function() {

    if ($('#start').html() == START) {
        // Remove canvas from html.
        $('div.fade').remove();
        $('.overlay').css("backgroundColor", "black"); // Switch back to black overlay.

        $('img').show();
        $('#ada').hide();
        $('#bluekey').hide();
        $('button').show();
        $('#startbtn').hide();
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

    /*
      If active option is A, then hehehe...
     */
    if ($("#option1").attr("class") == "active") {
        caidan += 1;
    }

    if ($("#" + options[questionNum-1]["answer"]).attr("class") == "active") {
        score += SCORE_CORRECT_ANSWER;
    } else {
        score -= SCORE_WRONG_ANSWER;
    }
    console.log(score);
    if (questionNum < MAX_QUESTIONS) {
        // If not at the last question
        apply();
    } else {
        // If at the last question
        $('img').hide();
        $('#ada').attr("src", "img/ADA.png");
        $('#bluekey').attr("src", "img/bklogo.png");
        $('#ada').show();
        $('#bluekey').show();
        $('button').hide();
        $('#bottom').hide();
        $('#author').show();
        if(caidan == 10) {
            $('#author').html(YOUR_SCORE + ": " + 101 + "<br/>" + report[101]);    
        }
        else {
            $('#author').html(YOUR_SCORE + ": " + score + "<br/>" + report[score]);
        }
        $('#startbtn').show();
        $('#start').show();
        $('#start').html("RESTART");
        if(caidan == 10) {
            $('title').html(101 + "分 " + title[101]);    
        }
        else {
            $('title').html(score + "分 " + title[score]);    
        }
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

/* Apply questions */
// 將選中的題目的圖片以及四個選項應用到頁面上
function apply() {

    /* Apply background image. */
    var deviceHeight = $( window ).height();
    $('.background-image').css('background','url(' + options[questionNum]["img"] + ') no-repeat');
    $('.background-image').css('backgroundSize', "auto " + deviceHeight + "px");

    $('#img').attr("src", images[questionNum].src);
    $('#option1').html(options[questionNum]["option1"]);
    $('#option2').html(options[questionNum]["option2"]);
    $('#option3').html(options[questionNum]["option3"]);
    $('#option4').html(options[questionNum]["option4"]);
    $('#next').html(NEXT);
    questionNum ++;

    var imageobj = new Image();
    imageobj.src = options[questionNum]["img"];
    images.push(imageobj);

    if (questionNum == MAX_QUESTIONS) {
        $('#next').html(FINISH);
    }
    $('#bottom').html(questionNum + " in " + MAX_QUESTIONS);
}
