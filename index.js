var countdownTime = 25;
var countdownLenth = countdownTime * 60000;
setInterval(function () {
    countdownLenth -= 1000;
    var output = (countdownLenth / 60000).toString().slice(0, 5) + '\n';
    process.stdout.write(output);
}, 1000);
