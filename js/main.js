$(function(){
    $(".typed").typed({
        strings: ["Hi,^300 I'm Rahat.^650",
                "I build software.",
                "And...^600 I break software.",
                "Rahat Mahbub"],
        typeSpeed: 1,
        backDelay: 1200,
        showCursor: true,
        callback: function() {
            setTimeout(function() {
                $('.typed-cursor').hide();

                $('#tagline')
                    .css('visibility', 'visible')
                    .addClass('animated fadeInUp');
                }, 800);
        }
        });

    $('#circle').circleProgress({
        value: 0.75,
        size: 100,
        fill: {
            gradient: ["red", "orange"]
        }
    });

    $('#circle2').circleProgress({
        value: 0.75,
        size: 100,
        fill: {
            gradient: ["red", "blue"]
        }
    });


    $('#circle3').circleProgress({
        value: 0.75,
        size: 100,
        fill: {
            gradient: ["blue", "green"]
        }
    });
});