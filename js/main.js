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
            $('.typed-cursor').fadeOut("slow");
            setTimeout(function() {
                $('#tagline')
                    .css('visibility', 'visible')
                    .addClass('animated fadeInUp');
                }, 800);
        }
    });

    var progressOpts = {
        color: '#FFA013',
        strokeWidth: 5,
        trailWidth: 3,
        duration: 1500,
        text: {
            value: '0'
        }
        // step: function(state, bar) {
        //     bar.setText((bar.value() * 100).toFixed(0));
        // }
    };

    var circle = new ProgressBar.Circle('#progress1', progressOpts).animate(0.8);

    var circle2 = new ProgressBar.Circle('#progress2', progressOpts).animate(0.7);

    var circle3 = new ProgressBar.Circle('#progress3', progressOpts).animate(0.7);

    var circle4 = new ProgressBar.Circle('#progress4', progressOpts).animate(0.7);

    var circle5 = new ProgressBar.Circle('#progress5', progressOpts).animate(0.7);

    var circle6 = new ProgressBar.Circle('#progress6', progressOpts).animate(0.7);
});
