$(function(){
    $('.typed').typed({
        strings: ["Hi,^300 I'm Rahat.^650",
                "I build software.",
                "And...^600 I break software.",
                "Rahat Mahbub"],
        typeSpeed: 1,
        backDelay: 1200,
        showCursor: true,
        callback: function() {
            $('.typed-cursor').fadeOut("slow");
            setTimeout(function() {
                $('#tagline')
                    .css('visibility', 'visible')
                    .addClass('animated fadeInUp');
                }, 800);
        }
    });

    var progressOpts = {
        size: 200,
        thickness: 8,
        startAngle: -Math.PI/2,
        lineCap: 'round',
        fill: {
            color: '#FFA013'
        },
        animation: {
            duration: 1500
        }
    };

    var progressVals = [0.75, 0.8, 0.65, 0.7, 0.6, 0.5];

    for (var i = 0; i < progressVals.length; i++) {
        progressOpts.value = progressVals[i];
        $('#progress'+(i+1)).circleProgress(progressOpts);
    }
});
