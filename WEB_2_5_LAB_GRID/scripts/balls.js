var maxWorkTimeInMSec = 30_000;

var theCanvas = document.getElementById("canvasOne");
var context = theCanvas.getContext("2d");
var dimensions = [theCanvas.width, theCanvas.height];
var to;

var b1 = {
    "color": "#FC0",
    "r": 10,
    "cord": [dimensions[0] / 2, 0],
    "speed": [0, 0]
};

var b2 = {
    "color": "#900",
    "r": 25,
    "cord": [0, dimensions[1] / 2],
    "speed": [0, 0]
};

var startMs;

function gameLoop() {
    startMs = Date.now();
    to = window.setTimeout(gameLoop, 20);
    drawScreen();
}

function drawScreen() {
    if (Date.now() - startMs > maxWorkTimeInMSec) clearTimeout(to);

    context.fillStyle = "#000";
    context.fillRect(0, 0, theCanvas.width, theCanvas.height);

    createAndAddBallToContext(b1);
    createAndAddBallToContext(b2);

    // повне накладання
    if (Math.hypot(b2["cord"][0] - b1["cord"][0], b2["cord"][1] - b1["cord"][1]) <= Math.abs(b2["r"] - b1["r"])) {
        stop(true);
    }
}

function createAndAddBallToContext(ball) {
    for (let i = 0; i < dimensions.length; ++i)
        if (((ball["cord"][i] += ball["speed"][i]) + ball["r"] * Math.sign(ball["speed"][i])) % dimensions[i] === 0)
            ball["speed"][i] *= -1;
    context.fillStyle = ball["color"];
    context.beginPath();
    context.arc(ball["cord"][0], ball["cord"][1], ball["r"], 0, 2 * Math.PI);
    context.closePath();
    context.fill();
}

function play() {
    document.getElementById("work").style.display = "block";
    return;
}

function close() {
    clearTimeout(to);
    document.getElementById("work").style.display = "none";
    outLS();
}

function setSpeedToBalls(b1Speed, b2Speed) {
    b1["speed"] = b1Speed;
    b2["speed"] = b2Speed;
}

var prev1Speed = [0, 10], prev2Speed = [5, 0];

function stop(isCover = false) {
    if (isCover)
        addToLS(new Date().toUTCString(), "Відбулося покриття шарів");
    else {
        addToLS(new Date().toUTCString(), "Була натиснута кнопка 'STOP'");
        document.getElementById("start-button").style.display = "block";
    }
    document.getElementById("reload-button").style.display = "block";
    document.getElementById("stop-button").style.display = "none";
    prev1Speed = b1["speed"];
    prev2Speed = b2["speed"];
    setSpeedToBalls([0, 0], [0, 0]);
}

var first = true;

function start() {
    addToLS(new Date().toUTCString(), "Була натиснута кнопка 'START'");
    document.getElementById("start-button").style.display = "none";
    document.getElementById("reload-button").style.display = "none";
    document.getElementById("stop-button").style.display = "block";
    if (first) gameLoop();
    first = false;
    setSpeedToBalls(prev1Speed, prev2Speed);
}

function reload() {
    addToLS(new Date().toUTCString(), "Була натиснута кнопка 'RELOAD'");
    document.getElementById("reload-button").style.display = "none";
    document.getElementById("start-button").style.display = "block";
    b1["cord"] = [dimensions[0] / 2, 0];
    b2["cord"] = [0, dimensions[1] / 2];
    setSpeedToBalls([0, 0], [0, 0]);
    prev1Speed = [0, 10];
    prev2Speed = [5, 0];
}

function addToLS(time, message) {
    localStorage.setItem(time, message);
    elem = document.createElement("P");
    elem.innerHTML = time + ": " + message;
    document.getElementById("main-aside").appendChild(elem);
}

function outLS() {
    for (let key of Object.keys(localStorage)) {
        if (key.endsWith("GMT")) {
            elem = document.createElement("P");
            elem.innerHTML = key + ": " + localStorage.getItem(key);
            document.getElementById("main-aside").appendChild(elem);
            localStorage.removeItem(key);
        }
    }
}














