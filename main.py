def on_left_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    tiles.place_on_random_tile(otherSprite, sprites.builtin.forest_tiles10)
    if info.score() == 50:
        game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    info.change_life_by(-1)
    if info.life() == 0:
        game.game_over(False)
        game.reset()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

mySprite: Sprite = None
music.play(music.string_playable("E B C5 A B G A F ", 120),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)
animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
info.set_life(3)
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
mySprite2.follow(mySprite, 50)
animation.run_image_animation(mySprite2,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    100,
    True)
mySprite3 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
animation.run_image_animation(mySprite3,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    100,
    True)
mySprite3.set_velocity(50, 50)
mySprite3.set_bounce_on_wall(True)
mySprite4 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
animation.run_image_animation(mySprite4,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    100,
    True)
mySprite4.set_velocity(50, 50)
mySprite4.set_bounce_on_wall(True)
game.set_game_over_effect(False, effects.dissolve)
tiles.place_on_tile(mySprite2, tiles.get_tile_location(6, 6))
egg = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(egg, sprites.builtin.forest_tiles10)
Egg1 = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(Egg1, sprites.builtin.forest_tiles10)
egg2 = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(egg2, sprites.builtin.forest_tiles10)
egg3 = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(egg3, sprites.builtin.forest_tiles10)
egg4 = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(egg4, sprites.builtin.forest_tiles10)