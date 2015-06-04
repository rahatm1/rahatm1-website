$(function(){
    $(".typed").typed({
        strings: ["Hi, I'm Rahat.^500",
                "I make software.",
                "And...^900 I break software.",
                "Rahat Mahbub"],
        typeSpeed: 1,
        backDelay: 1000,
        showCursor: false,
        callback: function() {
            setTimeout(function() {
                $('#tagline')
                    .css('visibility', 'visible')
                    .addClass('animated fadeInUp');
                }, 800);
        }
        });
});