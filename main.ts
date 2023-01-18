let Resposta = 0
let Numero1 = 0
let numero2 = 0
input.onButtonPressed(Button.A, function () {
    Resposta = 0
    Numero1 = randint(1, 5)
    numero2 = randint(1, 5)
    basic.showNumber(Numero1)
    basic.showString("X")
    basic.showNumber(numero2)
})
input.onGesture(Gesture.Shake, function () {
    Resposta = 0
    basic.showNumber(Resposta)
})
input.onButtonPressed(Button.AB, function () {
    if (Resposta == Numero1 * numero2) {
        basic.showString("OK")
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Resposta += 1
    basic.showNumber(Resposta)
})
