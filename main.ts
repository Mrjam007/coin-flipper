input.onButtonPressed(Button.AB, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.No)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        basic.showString("bad luck")
    } else {
        basic.showIcon(IconNames.Yes)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.UntilDone)
        basic.showString("nice")
    }
})
basic.showIcon(IconNames.Happy)
