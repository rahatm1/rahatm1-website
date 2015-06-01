$(function(){
    $(".typed").typed({
        strings: ["Hi, I'm Rahat.",
                "I make software.",
                "And...^1200 I break software.",
                "Rahat Mahbub"],
        typeSpeed: 0,
        backDelay: 1500,
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