
var article__panel = document.querySelector(".article__panel");
var slide_1 = document.querySelector(".slide_1");
var slide_2 = document.querySelector(".slide_2");
var logo_1_1 = document.querySelector(".logo_1_1");
var text_1_1 = document.querySelector(".text_1_1");
var logo_1_2 = document.querySelector(".logo_1_2");
var image_1_1 = document.querySelector(".image_1_1");
var image_2_1 = document.querySelector(".image_2_1");

show_slide_1();
function show_slide_1() {   
    image_2_1.classList ? image_2_1.classList.add('hidden') : image_2_1.className += ' hidden';
    slide_1.className = slide_1.className.replace('hidden', '');
    setTimeout(function() {
        image_1_1.className = image_1_1.className.replace('hidden', '');
        image_1_1.classList ? image_1_1.classList.add('fadeInUp') : image_1_1.className += ' fadeInUp';
        setTimeout(function() {
            text_1_1.className = text_1_1.className.replace('hidden', '');
            text_1_1.classList ? text_1_1.classList.add('fadeInZoom') : logo_1_1.className += ' fadeInZoom';
            logo_1_1.className = logo_1_1.className.replace('hidden', '');
            logo_1_1.classList ? logo_1_1.classList.add('fadeInZoom') : logo_1_1.className += ' fadeInZoom';
            setTimeout(function() {
                logo_1_2.className = logo_1_2.className.replace('hidden', '');
                logo_1_2.classList ? logo_1_2.classList.add('fadeInUp') : logo_1_2.className += ' fadeInUp';
                setTimeout(function() {
                    show_slide_2();
                }, 2300);
            }, 200);
        }, 200);
    }, 200);
}

function show_slide_2() {
    text_1_1.classList ? text_1_1.classList.add('hidden') : logo_1_1.className += ' hidden';
    slide_2.className = slide_2.className.replace('hidden', '');
    slide_2.classList ? slide_2.classList.add('fadeIn') : slide_2.className += ' fadeIn';
    setTimeout(function() {
        slide_2.className = slide_2.className.replace('fadeIn', '');
        image_2_1.className = image_2_1.className.replace('hidden', '');
        image_2_1.classList ? image_2_1.classList.add('fadeIn') : image_2_1.className += ' fadeIn';
        setTimeout(function(){
            show_slide_1();
        },2e3);
    }, 299);
}

startCountDown();
function startCountDown() {
    var now = new Date().getTime();
    var countDownDate = new Date("Sep 10 2019 21:19:00 +0600").getTime();
    function addZeroBefore(n) {
        return (n < 10 ? '0' : '') + n;
    }
    var x = setInterval(function() {
        now = now + 1000;
        var distance = countDownDate - now;
        var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance <= 0 && distance > -3600000) {
            document.getElementById("time_left").innerHTML = "00 00 00";
        } else if (distance <= -3600000) {
            clearInterval(x);
        } else {
            document.getElementById("time_left").innerHTML =  addZeroBefore(days) + " . " + addZeroBefore( hours) + " . " +
                addZeroBefore(minutes) + " . " + addZeroBefore(seconds);
        }
    }, 1000);
}