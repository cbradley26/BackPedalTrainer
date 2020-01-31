const patterns = [
    {
        pattern: "IN",
        sound: new Audio("sounds/in.mp3")
    },
    {
        pattern: "OUT",
        sound: new Audio("sounds/out.mp3")
    },
    {
        pattern: "POST",
        sound: new Audio("sounds/post.mp3")
    },
    {
        pattern: "CORNER",
        sound: new Audio("sounds/corner.mp3")
    },
    {
        pattern: "FLY",
        sound: new Audio("sounds/fly.mp3")
    }
]


var previousRoute = "";
var cntue = true;

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    cntue = true;
    startCounting();
}

function stop() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    cntue = false;
}

function drawNewPattern() {
    if (cntue) {

        var newRoute = patterns[parseInt(Math.random() * 5)];

        document.getElementById("routeElement").innerText = newRoute.pattern;
        
        newRoute.sound.play();
    }
}
var countDownDate = new Date();

function sortDate() {

    var seconds = countDownDate.getSeconds() + 17;
    countDownDate.setSeconds(seconds);
}

function startCounting() {
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = seconds + "s ";

        if (distance > 6000 && distance < 7000) {
            document.getElementById("instruction").innerText = "BACKPEDAL";
        }

        if (distance > 3000 && distance < 4000) {
            document.getElementById("instruction").innerText = "EXECUTE";
            drawNewPattern();
        }

        // If the count down is finished, write some text
        if (distance < 0) {
            document.getElementById("instruction").innerText = "BACK TO THE LINE";
            sortDate();
        }
    }, 1000);
}