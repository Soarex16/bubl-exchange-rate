const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;

const RATE_MIN = 0.94;
const RATE_MAX = 1.26;

const MIN_RATE_UPDATE = process.env.MIN_RATE_UPDATE || 2000; // 2 seconds
const MAX_RATE_UPDATE = process.env.MAX_RATE_UPDATE || 10000; // 10 seconds

/**
 * Generates random number in specified range
 * @param low {Number} - lower bound
 * @param high {Number} - upper bound
 * @return {Number} - random number in range [low, high)
 */
function randomInRange(low, high) {
    return low + Math.random() * (high - low);
}

/**
 * Creates periodic execution of callbackFn with random interval
 * @param callbackFn {Function} - callback function
 * @param low {Number} - lower bound of interval
 * @param high {Number} - upper bound of interval
 * @return {Function} - function that stops looping
 */
function setRandomInterval(callbackFn, low, high) {
    const timerHandle = { t: undefined };

    (function timerTick() {
        callbackFn();
        const ms = Math.trunc(randomInRange(low, high));
        timerHandle.t = setTimeout(timerTick, ms);
    })();

    function clearIntervalFunc() {
        if (timerHandle.t) {
            clearTimeout(timerHandle.t);
        }
    }

    return clearIntervalFunc;
}

const server = new WebSocket.Server({
    port: PORT
});

server.on('connection', function (ws, req) {
    const ip = req.socket.remoteAddress;
    console.log(`Establishing connection with ${ip}`);

    const cancelFunc = setRandomInterval(() => {
        const exchangeRate = randomInRange(RATE_MIN, RATE_MAX);
        const val = { t: Date.now(), c: exchangeRate };
        const message = JSON.stringify(val);

        console.log(`Sending message to ${ip} with payload ${message}`);
        ws.send(message);
    }, MIN_RATE_UPDATE, MAX_RATE_UPDATE);

    ws.on('close', function () {
        console.log(`Closing connection with ${ip}`);
        cancelFunc();
    });
});

console.log(`Listening on port ${PORT}`);
