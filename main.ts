input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
