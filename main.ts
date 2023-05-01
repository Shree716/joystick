input.onButtonPressed(Button.AB, function () {
    radio.sendValue("AB", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("B", 1)
})
let y = 0
let x = 0
joystickbit.initJoystickBit()
radio.setGroup(13)
basic.showIcon(IconNames.Yes)
basic.showString("T")
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, 100, -100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("C", 1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("D", 1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("E", 1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("F", 1)
    }
})
