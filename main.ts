input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 実際の角度(0))
})
function 実際の角度 (角度: number) {
    return 角度 * 2 / 3
}
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 実際の角度(270))
})
pins.servoWritePin(AnalogPin.P1, 実際の角度(135))
