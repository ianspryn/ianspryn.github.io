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
        setInterval(update, 1200000); //20 minutes

        function getSunRiseSet(callback) {
                $.get("https://api.sunrise-sunset.org/json?lat=41.15588648&lng=-80.0806389&formatted=0", function(data) {
                        sunriseMilli = Date.parse(data.results.sunrise);
                        sunsetMilli = Date.parse(data.results.sunset);
                        if (callback) {
                                callback();     
                        }
                });
        };


        function update() {
                if ((new Date().getTime()) > sunriseMilli && (new Date().getTime()) << sunsetMilli) {
                        //If it is after sunrise and before sunset, go to light page
                        if (window.location.href.indexOf("raspbian-dark.html") > -1) {
                                window.location.href = ("index.html");
                        }
                } else {
                        //Otherwise, it is night time, so go to dark page
                        if (window.location.href.indexOf("index.html") > -1) {
                                window.location.href = ("raspbian-dark.html");
                        }
                }
        };
});