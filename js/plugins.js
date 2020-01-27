//--- Responsive menu---//

$(document).ready(function () {
    $('#ge-sidebarCollapse').on('click', function () {
        $('#ge-sidebarCollapse').toggleClass('change');
        $('#ge-sidebar').toggleClass('active');
        $('#ge-menu-bg').toggleClass('ge-change-bg');
    });
});
//--- Responsive menu---//

//--- Button Top---//

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("#btn-scrollup").fadeIn();
    } else {
        $("#btn-scrollup").fadeOut();
    }
});
$("#btn-scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

//--Slider--//

var masterslider = new MasterSlider();

// slider controls
// slider setup
masterslider.setup("masterslider", {
    width: 1170,
    height: 760,
    minHeight: 0,
    space: 0,
    start: 1,
    grabCursor: true,
    swipe: true,
    mouse: true,
    keyboard: false,
    layout: "fullwidth",
    wheel: false,
    autoplay: true,
    instantStartLayers: false,
    loop: true,
    shuffle: false,
    preload: 0,
    heightLimit: true,
    autoHeight: false,
    smoothHeight: true,
    endPause: false,
    overPause: false,
    fillMode: "fill",
    centerControls: false,
    startOnAppear: false,
    layersMode: "center",
    autofillTarget: "",
    hideLayers: false,
    fullscreenMargin: 0,
    speed: 50,
    dir: "h",
    parallaxMode: "mouse:y-only",
    parallaxMode: "mouse",
    view: "basic"
});
// masterslider.control("bullets", { autohide: false, dir: "h", align: "bottom" });
masterslider.control("arrows", { autohide: false, overVideo: true });
//--Contactus validation--//


// Testimonial Slider
// vars
'use strict'
const doc = document;
var testim = doc.getElementById("testim"),
    testimDots = Array.prototype.slice.call(doc.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(doc.getElementById("testim-content").children),
    testimLeftArrow = doc.getElementById("left-arrow"),
    testimRightArrow = doc.getElementById("right-arrow"),
    testimSpeed = 5500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);


        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }

    })
}

// Testimonial Slider