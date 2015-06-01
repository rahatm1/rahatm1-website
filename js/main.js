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
            $('.section__content')
                .append("<h2 class='animated fadeInUp'>" +
                            "Software Engineer by day, Hacker by night. </h2>");
        }
        });//callback to fade in,
});