const countdownTime = 25
let countdownLenth = countdownTime * 60000

setInterval(
  () => {
    countdownLenth -= 1000
    const output = (countdownLenth / 60000).toString().slice(0, 5) + '\n';
    process.stdout.write(output)
  }, 1000
)

