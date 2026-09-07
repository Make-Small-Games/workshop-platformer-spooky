scene.onOverlapTile(SpriteKind.Player, assets.tile`Goal Tile`, function (sprite, location) {
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Attack_Counter < 3) {
        if (Current_Power_Up == Shoot_Power_Up_1) {
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
            Projectile_1 = sprites.createProjectileFromSprite(assets.image`Projectile Sprite`, My_Player, 100, 0)
            Attack_Counter += 1
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (My_Player.isHittingTile(CollisionDirection.Bottom)) {
        Jump_Counter = 0
    }
    if (Jump_Counter < 1) {
        Jump_Counter += 1
        music.play(music.createSoundEffect(
        WaveShape.Triangle,
        180,
        420,
        181,
        0,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        My_Player.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Power Up Tile`, function (sprite, location) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`transparency16`)
    My_Player.setImage(assets.image`Player Sprite With Power Up`)
    Current_Power_Up = Shoot_Power_Up_1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Trigger Tile`, function (sprite, location) {
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
    for (let Trigger_Tile of tiles.getTilesByType(assets.tile`Trigger Tile`)) {
        tiles.setTileAt(Trigger_Tile, assets.tile`transparency16`)
    }
    for (let Enemy_Spawn_Tile of tiles.getTilesByType(assets.tile`Enemy Spawn Tile`)) {
        Enemy_1 = sprites.create(assets.image`Enemy Sprite`, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy_1, Enemy_Spawn_Tile)
        Enemy_1.setBounceOnWall(true)
        Enemy_1.vx = 30
    }
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    Attack_Counter += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Hazard Tile`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    sprites.destroy(sprite)
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    700,
    180,
    219,
    0,
    90,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.bottom < otherSprite.y) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 120, 55, 199, 36, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        sprites.destroy(otherSprite)
        sprite.vy = -150
    } else {
        game.gameOver(false)
    }
})
let Enemy_1: Sprite = null
let Jump_Counter = 0
let Projectile_1: Sprite = null
let Current_Power_Up = 0
let Attack_Counter = 0
let Shoot_Power_Up_1 = 0
let My_Player: Sprite = null
My_Player = sprites.create(assets.image`Player Sprite`, SpriteKind.Player)
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`Platformer Level Map`)
tiles.placeOnRandomTile(My_Player, assets.tile`Player Spawn Tile`)
scene.cameraFollowSprite(My_Player)
controller.moveSprite(My_Player, 120, 0)
My_Player.ay = 500
Shoot_Power_Up_1 = 1
