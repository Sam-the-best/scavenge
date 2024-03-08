controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.gameOver(false)
        game.reset()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(otherSprite, sprites.builtin.forestTiles10)
    if (info.score() == 50) {
        game.gameOver(true)
    }
})
let mySprite: Sprite = null
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . . f e e d f d d f d c . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d d d d e e d c 
    . . . c d b e e d d c d d d d c 
    f f . c d b e e e d d c c c c c 
    f e f . c f f e e e d d d d f . 
    f e f . f e e e e f f f f f f . 
    f e f f e e e e e e e f f f f . 
    . f f e e e e f e f d d f d d f 
    . . f e e e e f e f b d f b d f 
    . . f e f f f f f f f f f f f f 
    . . f d d c f . . . . . . . . . 
    . . f f f f . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
animation.stopAnimation(animation.AnimationTypes.All, mySprite)
info.setLife(3)
let mySprite2 = sprites.create(img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite, 50)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . c c c c c c c . . . . . 
    . . . c 6 7 7 7 7 7 6 c . . . . 
    . . c 6 7 c 6 6 6 6 c 7 c . . . 
    . . c 7 7 6 f 6 6 f 6 7 6 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 7 6 1 f f 1 8 7 f . . 
    . . f 7 7 7 f 1 f f 1 f 6 f . . 
    . . f 6 7 7 f 2 2 2 2 f f . . . 
    . . c f 6 7 7 2 2 2 2 f c c . . 
    . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
    c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
    c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 1 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `],
100,
true
)
let mySprite3 = sprites.create(img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite3,
[img`
    . . . . c c c c c c c . . . . . 
    . . . c 6 7 7 7 7 7 6 c . . . . 
    . . c 6 7 c 6 6 6 6 c 7 c . . . 
    . . c 7 7 6 f 6 6 f 6 7 6 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 7 6 1 f f 1 8 7 f . . 
    . . f 7 7 7 f 1 f f 1 f 6 f . . 
    . . f 6 7 7 f 2 2 2 2 f f . . . 
    . . c f 6 7 7 2 2 2 2 f c c . . 
    . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
    c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
    c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 1 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `],
100,
true
)
mySprite3.setVelocity(50, 50)
mySprite3.setBounceOnWall(true)
let mySprite4 = sprites.create(img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite4,
[img`
    . . . . c c c c c c c . . . . . 
    . . . c 6 7 7 7 7 7 6 c . . . . 
    . . c 6 7 c 6 6 6 6 c 7 c . . . 
    . . c 7 7 6 f 6 6 f 6 7 6 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 7 6 1 f f 1 8 7 f . . 
    . . f 7 7 7 f 1 f f 1 f 6 f . . 
    . . f 6 7 7 f 2 2 2 2 f f . . . 
    . . c f 6 7 7 2 2 2 2 f c c . . 
    . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
    c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
    c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 1 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `],
100,
true
)
mySprite4.setVelocity(50, 50)
mySprite4.setBounceOnWall(true)
game.setGameOverEffect(false, effects.dissolve)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 6))
let egg = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 1 1 1 1 b b . . . . 
    . . . . b 1 1 1 3 3 1 b . . . . 
    . . . b 1 1 1 1 3 3 3 1 b . . . 
    . . . b 1 1 3 1 1 3 3 1 b . . . 
    . . b d 1 1 1 1 1 1 1 1 d b . . 
    . . b d 3 3 1 1 1 1 1 1 d b . . 
    . . b b 3 3 1 1 1 1 3 3 d b . . 
    . . c b b d 1 1 1 3 3 b d c . . 
    . . c d d d d d d b b b d c . . 
    . . c b d d b b d b b d b c . . 
    . . . c d d b b d d d d c . . . 
    . . . . c b d d d d b c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(egg, sprites.builtin.forestTiles10)
let Egg1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 1 1 1 1 b b . . . . 
    . . . . b 1 1 1 3 3 1 b . . . . 
    . . . b 1 1 1 1 3 3 3 1 b . . . 
    . . . b 1 1 3 1 1 3 3 1 b . . . 
    . . b d 1 1 1 1 1 1 1 1 d b . . 
    . . b d 3 3 1 1 1 1 1 1 d b . . 
    . . b b 3 3 1 1 1 1 3 3 d b . . 
    . . c b b d 1 1 1 3 3 b d c . . 
    . . c d d d d d d b b b d c . . 
    . . c b d d b b d b b d b c . . 
    . . . c d d b b d d d d c . . . 
    . . . . c b d d d d b c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Egg1, sprites.builtin.forestTiles10)
let egg2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 1 1 1 1 b b . . . . 
    . . . . b 1 1 1 3 3 1 b . . . . 
    . . . b 1 1 1 1 3 3 3 1 b . . . 
    . . . b 1 1 3 1 1 3 3 1 b . . . 
    . . b d 1 1 1 1 1 1 1 1 d b . . 
    . . b d 3 3 1 1 1 1 1 1 d b . . 
    . . b b 3 3 1 1 1 1 3 3 d b . . 
    . . c b b d 1 1 1 3 3 b d c . . 
    . . c d d d d d d b b b d c . . 
    . . c b d d b b d b b d b c . . 
    . . . c d d b b d d d d c . . . 
    . . . . c b d d d d b c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(egg2, sprites.builtin.forestTiles10)
let egg3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 1 1 1 1 b b . . . . 
    . . . . b 1 1 1 3 3 1 b . . . . 
    . . . b 1 1 1 1 3 3 3 1 b . . . 
    . . . b 1 1 3 1 1 3 3 1 b . . . 
    . . b d 1 1 1 1 1 1 1 1 d b . . 
    . . b d 3 3 1 1 1 1 1 1 d b . . 
    . . b b 3 3 1 1 1 1 3 3 d b . . 
    . . c b b d 1 1 1 3 3 b d c . . 
    . . c d d d d d d b b b d c . . 
    . . c b d d b b d b b d b c . . 
    . . . c d d b b d d d d c . . . 
    . . . . c b d d d d b c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(egg3, sprites.builtin.forestTiles10)
let egg4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 1 1 1 1 b b . . . . 
    . . . . b 1 1 1 3 3 1 b . . . . 
    . . . b 1 1 1 1 3 3 3 1 b . . . 
    . . . b 1 1 3 1 1 3 3 1 b . . . 
    . . b d 1 1 1 1 1 1 1 1 d b . . 
    . . b d 3 3 1 1 1 1 1 1 d b . . 
    . . b b 3 3 1 1 1 1 3 3 d b . . 
    . . c b b d 1 1 1 3 3 b d c . . 
    . . c d d d d d d b b b d c . . 
    . . c b d d b b d b b d b c . . 
    . . . c d d b b d d d d c . . . 
    . . . . c b d d d d b c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(egg4, sprites.builtin.forestTiles10)
