$(document).ready(function () {
        console.log("READY")
        $.getJSON("https://ian-spryn-dark-sky.herokuapp.com/api/weather", { latitude: "41.155", longitude: "-80.079" })
                .done(function (data) {
                        let nearestStormDistance = data["currently"]["nearestStormDistance"]
                        //no storms/rain around, show the temperature map instead and zoom out a little
                        if (nearestStormDistance > 0) {
                                $("#radar").remove()
                        }
                        //there is a storm/rain around, show the radar map and zoom in a little
                        else {
                                $("#temperature").remove()
                        }
                })
                .fail(function (data, err) {
                        $("#temperature").remove()
                        $("<p></p>")
                                .html("Failed to load from Heroku")
                                .css({
                                        "position": "fixed",
                                        "bottom": "0px",
                                        "color": "#ef5350",
                                        "font-family": "Calibri",
                                        "left": "50%",
                                        "margin-left": "-87px"

                                })
                                .appendTo("body")
                        console.log("DATA\n" + data)
                        console.log("ERR\n" + err)
                })
})