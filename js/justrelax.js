$.fn.pulse = function(options) {
    var relax = $.extend({
        duration: 1,
    }, options);
    console.log(this);
    return this.each(function() {
        var $element = $(this);
        
        var terms = ["BREATHE IN", "BREATHE OUT"];

        function rotateTerm() {
            var ct = $element.data("term") || 0;
            $element.data("term", ct == terms.length -1 ? 0 : ct + 1)
                        .text(terms[ct])
                        .css({
                                animation: "fade " + relax.duration+ "s infinite",
                                "transition-timing-function": "cubic-bezier(0.45,0.05,0.7,1.5)"
                        });

            setInterval(function() {
                
                var text = $element.text();
                console.log(text);
                if($element.text() === 'BREATHE OUT') {
                    $element.text('BREATHE IN');
                }
                else {
                    $element.text('BREATHE OUT')
                }
            }, (relax.duration * 1000) / 2);
        }




        // this.css({
        //     background: relax.background,
        //     // times: relax.times,
        //     // duration: relax.duration,
        //     "transition-timing-function": relax.transitionTimingFunction
        // })
        
        // var period = function(callback) {
        //     $(this).animate({opacity: 0}, options.duration, function() {
        //         $(this).animate({opacity: 1}, options.duration, callback);
        //     });
        // };
        
        // $element.on('click',function() {
        //     if($element.hasClass('relaxbox')) {
        //         $element.removeClass('relaxbox');
        //     }
        //     else {
        //         $element.addClass('relaxbox');
        //     }
        // });

        //     this.hover(function() {
        //     if($(this).hasClass('relaxbox')) {
        //         $(this).removeClass('relaxbox');
        //     }
        //     else {
        //         $(this).addClass('relaxbox');
        //     }
        // });

        // return this.each(function() {
        //     var i = +options.times, self = this,
        //     repeat = function() { --i && period.call(self, repeat) };
        //     period.call(this, repeat);
        // });

        // var transition function() {
        //     $("box").click(function() { 
        //         $(this).toggleClass("relaxbox");
        // });

        var audio = $('#soundTour').get(0);
            
        $("#play").click(function() {
            audio.play();
        });

        $("#pause").click(function() {
            audio.pause();    
        });    
            
        $("#stop").click(function() {
            audio.src = 'audio/whisperz.mp3';
            audio.load();
        });
        rotateTerm();
    });

};