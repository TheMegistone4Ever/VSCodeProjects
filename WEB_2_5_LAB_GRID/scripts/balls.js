var maxWorkTimeInMSec = 30_000;

var theCanvas = document.getElementById("canvasOne");
var context = theCanvas.getContext("2d");
var dimensions = [theCanvas.width, theCanvas.height];

var b1 = {
    "color": "#FC0",
    "r": 10,
    "cord": [dimensions[0] / 2, 0],
    "speed": [0, 10]
};

var b2 = {
    "color": "#900",
    "r": 25,
    "cord": [0, dimensions[1] / 2],
    "speed": [5, 0]
};

startMs = Date.now();
gameLoop();

function gameLoop() {
    window.setTimeout(gameLoop, 20);
    drawScreen();
}

function drawScreen() {

    if (Date.now() - startMs > maxWorkTimeInMSec) return;

    context.fillStyle = "#000";
    context.fillRect(0, 0, theCanvas.width, theCanvas.height);

    createAndAddBallToContext(b1);
    createAndAddBallToContext(b2);

    // повне накладання
    if (Math.hypot(b2["cord"][0] - b1["cord"][0], b2["cord"][1] - b1["cord"][1]) <= Math.abs(b2["r"] - b1["r"])) {
        b1["speed"] = [0, 0];
        b2["speed"] = [0, 0];
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
