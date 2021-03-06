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

//------------------------------------------------------------------------------
// Page #2 - Skills Circular Progress
//------------------------------------------------------------------------------

    var progressOpts = {
        size: 200,
        thickness: 7,
        startAngle: -Math.PI/2,
        lineCap: 'round',
        fill: {
            color: '#FFA013'
        },
        animation: {
            duration: 1200
        }
    };

    var progressVals = [0.75, 0.65, 0.6, 0.8, 0.75, 0.5];

    var setProgress = function(start, end) {
        for (var i = start; i <=end; i++) {
            progressOpts.value = progressVals[i-1];
            $('#progress'+i).circleProgress(progressOpts);
        }
    };

    var firstHalf = $('#progress1'),
        lastHalf = $('#progress4'),
        firstInited = false,
        lastInited = false;

    firstHalf.appear({force_process: true});
    lastHalf.appear({force_process: true});

    firstHalf.on('appear', function() {
        if (!firstInited) {
            setProgress(1,3);
            firstInited = true;
        }
    });

    lastHalf.on('appear', function() {
        if (!lastInited) {
            setProgress(4,6);
            lastInited = true;
        }
    });

//------------------------------------------------------------------------------
// Page #3 - Projects Page
//------------------------------------------------------------------------------

$('#project-gallery').flickerplate({
    "auto_flick": true,
    "auto_flick_delay": 6
});

});
