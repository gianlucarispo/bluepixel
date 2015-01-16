$("#main-nav li a.internal").on("click", function(e) {
    e.preventDefault();

    // Scroll to section in href
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});

$("#night-mode .night-mode-btn").on("click", function(){
    $(this).toggleClass("on");

    if (!$(this).hasClass("on")) {
        $("#night-mode").addClass("dark-on");
        $("#night-mode h1").text("Let it be light.");
    } else {
        $("#night-mode").removeClass("dark-on");
        $("#night-mode h1").text("Let it be dark.");
    }
});

$(window).on("scroll", function() {
    var scroll = ($(window).scrollTop()),
        fromBottom = $(document).height() - (scroll + $(window).height()),
        heroPerc = 12,
        limit = 400,
        footerScroll = 1 - (fromBottom/limit),

        $footer = $("#main-footer"),
        $heroPhone = $(".hero-iphone");

    if ($(window).width() > 1000) {
        $heroPhone.css("-webkit-transform","translate3d(0px,"+(-scroll/(100/heroPerc))+"px, 0px)");
        $footer.css("opacity", footerScroll);
    }

    $(".sec").each(function() {
        // Get scroll offset for section w/ 600px buffer
        var scrollForSec = $(this).offset().top - 600;

        if ($(window).scrollTop() >= scrollForSec) {
            if (!$(this).find(".inner").hasClass("scrolled")) {
                $(this).find(".inner").addClass("fade-in scrolled");
            }
        }
    });
});
