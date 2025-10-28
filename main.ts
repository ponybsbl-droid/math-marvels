namespace SpriteKind {
    export const item = SpriteKind.create()
}
info.player1.onScore(15, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setLife(100)
    mySprite.startEffect(effects.blizzard)
    mySprite = sprites.create(assets.image`Duck of Power`, SpriteKind.Player)
    sprites.destroy(mySprite)
    if (controller.B.isPressed()) {
        pause(5000)
        info.setLife(1)
    }
    pause(15000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite2.overlapsWith(otherSprite)) {
        for (let index = 0; index < 3; index++) {
            sprites.destroy(mySprite2)
            mySprite2 = sprites.create(img`
                ....88..........
                ....868d........
                .....86d........
                ......86d.......
                .......868......
                .......868......
                ........868.....
                ........868.....
                .......dd668....
                ........d668....
                ........d668d...
                ........876dd...
                ........876d....
                .......86768....
                .......87768....
                .......6778.....
                ....d.67676.....
                ....dd67676.....
                .....d5656......
                ....dd5656......
                ....6565ddd.....
                ...8767dd.......
                d.876776...8....
                dd67678....8....
                .d76668...88....
                .d7868....86....
                .86868...876....
                868668..8768....
                86868..8767ddd..
                86868..87dd..d..
                86868.87678.....
                86878.8766......
                8787887678......
                876768768.88.dd.
                876778668.678d..
                d76676668..67d..
                .dd6778668..67d.
                .8766778668.67d8
                .877667688885678
                ..87667768885656
                .dd6766778887856
                .d.ddd6677876876
                ....877667768668
                .....87766768668
                ......877677668.
                .......87667668.
                ........876768..
                ........87688...
                `, SpriteKind.Enemy)
        }
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(mySprite4, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.item, SpriteKind.item, function (sprite, otherSprite) {
    sprites.destroy(mySprite3, effects.fire, 500)
})
info.onLifeZero(function () {
    game.splash("Time to solve a math problem")
    game.setDialogFrame(img`
        ..66666666666666666666..
        .6699999999999999999966.
        669991111111111111199966
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        669991111111111111199966
        .6699999999999999999966.
        ..66666666666666666666..
        `)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.item, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(0, 200), randint(0, 200))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
info.player1.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.blizzard)
    game.setGameOverPlayable(false, music.melodyPlayable(music.bigCrash), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    for (let index = 0; index < 15; index++) {
        sprites.destroy(otherSprite)
    }
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    ..66666666666666666666..
    .6699999999999999999966.
    669991111111111111199966
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    699911111111111111119996
    669991111111111111199966
    .6699999999999999999966.
    ..66666666666666666666..
    `)
game.splash("Math Marvels")
tiles.setCurrentTilemap(tilemap`level2`)
game.splash("Collect chests to earn points!")
game.splash("Don't hit the thorned plants or take damage!")
game.splash("Collect coins to gain hearts.")
game.splash("Press x or a to become invincible for a few seconds but, be carefull after 5 seconds you will be at one heart")
game.splash("Good luck")
game.splash("If you run out of hearts, you will have to solve a math problem to continue.")
mySprite = sprites.create(assets.image`Duck of Power`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.setLife(2)
info.setScore(0)
game.onUpdateInterval(15000, function () {
    sprites.destroy(mySprite4)
})
game.onUpdateInterval(15000, function () {
    mySprite4 = sprites.create(img`
        . . . f f f f f f f f f . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f f 5 1 5 1 1 1 5 5 5 f f . . 
        . f 5 5 5 5 1 1 5 5 1 1 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 1 1 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 1 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 d 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 d 5 5 5 5 5 5 f . . 
        . f f 5 5 5 5 d d d 5 5 f f . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite4.setPosition(randint(0, 200), randint(0, 200))
})
game.onUpdateInterval(700, function () {
    mySprite2 = sprites.create(img`
        ....88..........
        ....868d........
        .....86d........
        ......86d.......
        .......868......
        .......868......
        ........868.....
        ........868.....
        .......dd668....
        ........d668....
        ........d668d...
        ........876dd...
        ........876d....
        .......86768....
        .......87768....
        .......6778.....
        ....d.67676.....
        ....dd67676.....
        .....d5656......
        ....dd5656......
        ....6565ddd.....
        ...8767dd.......
        d.876776...8....
        dd67678....8....
        .d76668...88....
        .d7868....86....
        .86868...876....
        868668..8768....
        86868..8767ddd..
        86868..87dd..d..
        86868.87678.....
        86878.8766......
        8787887678......
        876768768.88.dd.
        876778668.678d..
        d76676668..67d..
        .dd6778668..67d.
        .8766778668.67d8
        .877667688885678
        ..87667768885656
        .dd6766778887856
        .d.ddd6677876876
        ....877667768668
        .....87766768668
        ......877677668.
        .......87667668.
        ........876768..
        ........87688...
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 200), randint(0, 200))
})
game.onUpdateInterval(2000, function () {
    mySprite3 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 f f f f f f f f f f f f 7 f 
        f 7 f f f f f f f f f f f f 7 f 
        f 7 f f f f f f f f f f f f 7 f 
        f 7 7 f f f f f f f f f f 7 7 f 
        f 7 7 7 f 7 7 7 7 7 7 f 7 7 7 f 
        f 7 7 7 1 7 7 7 7 7 7 1 7 7 7 f 
        f d d d d d d e e d d d d d d f 
        f 1 1 1 1 1 1 f f 1 1 1 1 1 1 f 
        f 1 f f f f 1 f f 1 f f f f 1 f 
        f 1 7 7 7 7 f 1 1 f 7 7 7 7 1 f 
        f 1 7 7 7 7 7 7 7 7 7 7 7 7 1 f 
        f 1 7 7 7 7 7 7 7 7 7 7 7 7 1 f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.item)
    mySprite3.setPosition(randint(0, 200), randint(0, 200))
})
game.onUpdateInterval(3500, function () {
    for (let index = 0; index < 10; index++) {
        sprites.destroy(mySprite2, effects.fire, 500)
    }
})
