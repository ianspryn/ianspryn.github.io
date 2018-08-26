//Sunrise and sunset times calculated from https://sunrise-sunset.org/api

$(document).ready(function() {

        var sunrise;
        var sunset;
        var sunriseMilli;
        var sunsetMilli;


        
        

        

        //INITIAL RUN
        getSunRiseSet(function() {
                update();
        });
        
        setInterval(getSunRiseSet, 21600000); //6 hours
        setInterval(update, 600000); //10 minutes

        function getSunRiseSet(callback) {
                $.get("https://api.sunrise-sunset.org/json?lat=41.15588648&lng=-80.0806389&formatted=0", function(data) {
                        sunrise = data.results.sunrise;
                        sunset = data.results.sunset;
                        sunriseMilli = Date.parse(sunrise); // - 14400000 to get current timezone
                        sunsetMilli = Date.parse(sunset);
                        if (callback) {
                                callback();     
                        }
                });
        };


        function update() {
                
                if ((new Date().getTime()) > sunriseMilli && (new Date().getTime()) << sunsetMilli) {
                        //If it is after sunrise and before sunset, go to light page
                        if (window.location.href == "file:///C:/Users/frees/Documents/GitHub/ianspryn.github.io/raspbian/raspbian-dark.html" || window.location.href == "http://ian.spryn.me/raspbian/raspbian-dark.html") {
                                window.location.href = ("index.html");
                        }

                } else {
                        //Otherwise, it is night time, so go to dark page
                        if (window.location.href == "file:///C:/Users/frees/Documents/GitHub/ianspryn.github.io/raspbian/index.html" || window.location.href == "http://ian.spryn.me/raspbian/index.html") {
                                window.location.href = ("raspbian-dark.html");
                        }
                }
        };
});