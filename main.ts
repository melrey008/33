input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
let pilota = game.createSprite(0, 1)
basic.forever(function () {
    pilota.move(0.25)
    pilota.ifOnEdgeBounce()
    if (input.buttonIsPressed(Button.A)) {
        pilota.move(1)
        pilota.ifOnEdgeBounce()
    }
    if (input.buttonIsPressed(Button.B)) {
        pilota.move(2)
        pilota.ifOnEdgeBounce()
    }
    if (input.buttonIsPressed(Button.AB)) {
        game.pause()
    }
})
