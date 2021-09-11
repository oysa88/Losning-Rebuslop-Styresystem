radio.onReceivedString(function (receivedString) {
    if (receivedString == "TEKNISK") {
        basic.showIcon(IconNames.Heart)
        OrchestraMusician.send(1, "BOB")
        OrchestraMusician.send(1, "TIM")
        basic.pause(StepLength)
        basic.clearScreen()
    }
})
let StepLength = 0
StepLength = 200
