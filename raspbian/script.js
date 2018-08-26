//Sunrise and sunset times calculated from https://sunrise-sunset.org/api

$(document).ready(function() {

        var sunrise;
        var sunset;
        var sunriseMilli;
        var sunsetMilli;



        update(); //INITIAL RUN

        setInterval(getSunRiseSet, 4000); //24 hours 86400000

                function getSunRiseSet() {
                        $.get("https://api.sunrise-sunset.org/json?lat=41.15588648&lng=-80.0806389&formatted=0", function(data) {
                                //console.log(data);
                                sunrise = data.results.sunrise;
                                sunset = data.results.sunset;
                                sunriseMilli = Date.parse(sunrise); // - 14400000 to get current timezone
                                sunsetMilli = Date.parse(sunset);
                                console.log(new Date().getTime());
                        });
        
                };
        
                getSunRiseSet();
                
                
                setInterval(update, 3000); //10 minutes 600000
        
                function update() {
                        $("#left").empty();
                        $("#right").empty();
                        if ((new Date().getTime()) > sunriseMilli && (new Date().getTime()) << sunsetMilli) {
                                //If it is after sunrise and before sunset, making everything white
                                console.log("YAY IT'S DAYTIME");
                                $("#left").append("<script type='text/javascript' src='https://darksky.net/widget/small/41.1926318,-80.0758425/us12/en.js?width=90%&height=200&textColor=333333&bgColor=transparent&transparency=true&skyColor=333333&fontFamily=Default'></script>");
                                $("#left").append("<script type='text/javascript' src='https://darksky.net/widget/default/41.1926318,-80.0758425/us12/en.js?width=100%&height=350&title=Grove City&textColor=333333&transparency=true&skyColor=333333&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>");
                                $("#right").append("<script type='text/javascript' src='https://darksky.net/widget/graph/41.1926318,-80.0758425/us12/en.js?width=100%&height=320&title=Full Forecast&textColor=333333&transparency=true&fontFamily=Default&customFont=&units=us&graph=temperature_graph&timeColor=333333&tempColor=333333&lineColor=f8423c&markerColor=f8423c'></script>");
                                $("#right").append("<script type='text/javascript' src='https://darksky.net/widget/graph/41.1926318,-80.0758425/us12/en.js?width=100%&height=320&textColor=333333&bgColor=FFFFFF&transparency=true&fontFamily=Default&customFont=&units=us&graph=precip_graph&timeColor=333333&tempColor=333333&lineColor=4780c2&markerColor=4780c2'></script>");                        
                        } else {
                                //Otherwise, it is night time, so make everything dark
                                $("#left").append("<script type='text/javascript' src='https://darksky.net/widget/small/41.1926318,-80.0758425/us12/en.js?width=100%&height=200&title=Full Forecast&textColor=ffffff&transparency=true&skyColor=ffffff&fontFamily=Default&customFont=&units=us'></script>");
                                $("#left").append("<script type='text/javascript' src='https://darksky.net/widget/default/41.1926318,-80.075842/us12/en.js?width=100%&height=350&title=Full Forecast&textColor=ffffff&transparency=true&skyColor=ffffff&fontFamily=Default&customFont=&units=us&htColor=dddddd&ltColor=ffffff&displaySum=no&displayHeader=no'></script>");
                                $("#right").append("<script type='text/javascript' src='https://darksky.net/widget/graph/41.1926318,-80.075842/us12/en.js?width=100%&height=320&textColor=ffffff&transparency=true&fontFamily=Default&customFont=&units=us&graph=temperature_graph&timeColor=ffffff&tempColor=ffffff&lineColor=f8423c&markerColor=f8423c'></script>");
                                $("#right").append("<script type='text/javascript' src='https://darksky.net/widget/graph/41.1926318,-80.075842/us12/en.js?width=100%&height=320&textColor=ffffff&bgColor=transparent&transparency=true&fontFamily=Default&customFont=&units=us&graph=precip_graph&timeColor=ffffff&tempColor=ffffff&lineColor=4780c2&markerColor=4780c2'></script>");
                        }
                };

       

        setTimeout(removeElement, 4000);

        function removeElement() {
                $(".one").empty();
        }
});