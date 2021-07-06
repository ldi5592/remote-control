radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.South)
    } else if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.West)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
})
radio.setGroup(96)
