let Direction2 = 0
basic.forever(function () {
    Direction2 = input.compassHeading()
    if (Direction2 >= 45 && Direction2 < 135) {
        basic.showString("N")
    } else if (Direction2 >= 135 && Direction2 < 225) {
        basic.showString("E")
    } else if (Direction2 >= 225 && Direction2 < 315) {
        basic.showString("S")
    } else if (Direction2 >= 315 && Direction2 < 45) {
        basic.showString("W")
    }
})
