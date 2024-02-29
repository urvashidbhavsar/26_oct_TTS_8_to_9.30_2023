$(document).ready(function () {
    $i = $("#icon");
    $(".tbtn").click(function () {
        $(".nav").toggleClass("navigation")

        if ($(".nav").hasClass("navigation") == true) {
            $i.removeClass("fa-bars");
            $i.addClass("fa-close");
        } else {
            $i.removeClass("fa-close");
            $i.addClass("fa-bars")
        }
    })
})

$(function () {
    $(window).scroll(function () {
        $curr = $(this).scrollTop();
        if ($curr > 0) {
            $("header").addClass("topheader")
        } else {
            $("header").removeClass("topheader")
        }
    })
})

$(function () {
    $("#menulist").click(function () {
        $(".menu").toggleClass("drop")
    })
})