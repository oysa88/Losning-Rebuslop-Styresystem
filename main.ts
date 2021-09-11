input.onButtonPressed(Button.A, function () {
    radio.sendString("TEKNISK")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "TEKNISK") {
        OrchestraMusician.send(1, "BOB")
        OrchestraMusician.send(1, "TIM")
        basic.pause(StepLength)
    }
})
let StepLength = 0
StepLength = 200
