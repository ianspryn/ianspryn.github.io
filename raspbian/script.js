// var temperatureMap = $("<script",
//         {
//                 src: "https://darksky.net/map-embed/@temperature,41.155,-80.079,9.js?marker=41.155,-80.079&marker-name=College&embed=true&timeControl=false&fieldControl=false&defaultField=radar"
//         })
// var radarMap = $("<script>",
//         {
//                 src: "https://darksky.net/map-embed/@radar,41.155,-80.079,9.js?marker=41.155,-80.079&marker-name=College&embed=true&timeControl=false&fieldControl=false&defaultField=radar"
//         })


$(document).ready(function () {
        console.log("READY")
        $.getJSON("https://ian-spryn-dark-sky.herokuapp.com/api/weather", { latitude: "41.155", longitude: "-80.079" }, (data) => {
                console.log(data)
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
})