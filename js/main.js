$(function(){
    $(".typed").typed({
        strings: ["Hi, I'm Rahat.^650",
                "I make software.",
                "And...^600 I break software.",
                "Rahat Mahbub"],
        typeSpeed: 1,
        backDelay: 1200,
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