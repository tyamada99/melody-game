input.onButtonPressed(Button.A, function () {
    鳴らす = 1
})
let 鳴らす = 0
let 音階 = [
262,
262,
392,
392,
440,
440,
392,
349,
349,
330,
330,
294,
294,
262
]
鳴らす = 0
let 長さ = 音階.length
for (let カウンター = 0; カウンター <= 長さ - 1; カウンター++) {
    while (鳴らす == 0) {
        basic.pause(100)
    }
    music.playTone(音階[カウンター], music.beat(BeatFraction.Whole))
    鳴らす = 0
}
