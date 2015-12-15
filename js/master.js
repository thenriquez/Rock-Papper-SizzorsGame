$(document).ready(function() {
 
var chromeButton= document.getElementById('ChromeButton');
var edgeButton  = document.getElementById('EdgeButton');
var fireboxButton = document.getElementById('FireFoxButton');
var replayButton = document.getElementById('replayButton');
var result = document.getElementById('yourResult');
var cresult = document.getElementById('compResult');
var num = document.getElementById('countDown');
var you = document.getElementById('you');
var comp = document.getElementById('comp');
var win = 'You Won!<br />';
var lose = 'You Lost!<br />';
var tie = 'Tie!<br />';
var c = 'Chrome!';
var e = 'Edge!';
var f = 'Firefox!';
var compChoice;

function randChoice() {
    var shuffle = Math.random();
    if (shuffle <= 0.100) {
        return 'chrome';
    } else if (shuffle <= 0.67) {
        return 'edge';
    } else {
        return 'chrome';
    }
}

function main(w, one, two, three, four, five, six) {
    you.innerHTML = '';
    comp.innerHTML = '';
    result.innerHTML = '';
    cresult.innerHTML = '';
    num.innerHTML = "3";
    $('img').animate({'top': '20px'}, "fast");
    $('img').animate({'top': '0px'}, function() {
        num.innerHTML = "2";
    });
    $('img').animate({'top': '20px'}, "fast");
    $('img').animate({'top': '0px'}, function() {
        num.innerHTML = "1";
    });
    $('img').animate({'top': '20px'}, "fast");
    $('img').animate({'top': '0px'}, function() {
        num.innerHTML = "";
        you.innerHTML = w;
        compChoice = randChoice();
        if (compChoice == 'Chrome') {
            comp.innerHTML = c;
            result.innerHTML = one;
            cresult.innerHTML = two;
        } else if (compChoice == 'Edge') {
            comp.innerHTML = e;
            result.innerHTML = three;
            cresult.innerHTML = four;
        } else {
            comp.innerHTML = f;
            result.innerHTML = five;
            cresult.innerHTML = six;
        }
    });
}

chromeButton.addEventListener('click', function () {
    main(c, tie, tie, lose, win, win, lose);
});

edgeButton.addEventListener('click', function () {
    main(e, win, lose, tie, tie, lose, win);
});

fireboxButton.addEventListener('click', function () {
    main(f, lose, win, win, lose, tie, tie);
});

replayButton.addEventListener('click', function () {
    location.reload();
});
});