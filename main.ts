input.onButtonPressed(Button.A, function () {
    points += 1
    basic.showString("" + (points))
})
input.onButtonPressed(Button.AB, function () {
    points = 0
    basic.showString("" + (points))
})
input.onButtonPressed(Button.B, function () {
    points += -1
    basic.showString("" + (points))
})
let points = 0
points = 0
basic.showString("" + (points))
