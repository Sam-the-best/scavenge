// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010b0101010101010101010101010101010101010101010101010101010101010101030707070707070707070704010101010802020202020202020202090101010108020202020c0202020c02090101010108020c02020202020202020901010101080202020202020202020209010101010802020c02020c02020c0209010101010802020202020202020202090101010108020c0202020202020c020901010101080202020c0202020c020209010101010802020202020202020202090101010108020202020202020202020901010101050a0a0a0a0a0a0a0a0a0a0601010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . 2 . . . 2 . 2 . . 
. . 2 . 2 . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . 2 . . 2 . . 2 . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . 2 . . . . . . 2 . 2 . . 
. . 2 . . . 2 . . . 2 . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 . 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles14,sprites.dungeon.chestOpen,sprites.builtin.brick], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
