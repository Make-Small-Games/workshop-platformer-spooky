// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Platformer Level Map":
            case "level1":return tiles.createTilemap(hex`3200100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000050000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000505000005050000000000000005000000000000000000000000000000000400000000000000000000000000000000000005050501010505050000000300050505000000030000030000030005000007090909090a00000b0a00000b0a00000b09090909090909090909090909090909090909090909090909090909090909090909080808080d00000c0d00000c0d00000c08080808080808080808080808080808080808080808080808080808080808080808080808080d00000c0d00000c0d00000c08080808080808080808080808080808080808080808080808080808080808080808080808080d00000c0d00000c0d00000c08080808080808080808080808080808080808080808080808080808080808080808080808080d00000c0d00000c0d00000c08080808080808080808080808080808080808080808080808080808080808080808080808080d00000c0d00000c0d00000c08080808080808080808080808080808080808080808080808080808080808080808080808080d01010c0d01010c0d01010c080808080808080808080808080808080808080808080808080808080808080808080808080808090908080909080809090808080808080808080808080808080808080808080808080808080808080808080808`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
.....................2..2.........................
....................22..22.......2................
...................222..222.....222...........2...
22222..22..22..22222222222222222222222222222222222
22222..22..22..22222222222222222222222222222222222
22222..22..22..22222222222222222222222222222222222
22222..22..22..22222222222222222222222222222222222
22222..22..22..22222222222222222222222222222222222
22222..22..22..22222222222222222222222222222222222
22222..22..22..22222222222222222222222222222222222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile7,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Hole Tile":
            case "tile2":return tile2;
            case "Goal Tile":
            case "tile9":return tile9;
            case "Barrier Tile":
            case "tile6":return tile6;
            case "Hazard Tile":
            case "tile1":return tile1;
            case "Player Spawn Tile":
            case "tile5":return tile5;
            case "Ground 1 Tile":
            case "tile7":return tile7;
            case "Ground 2 Tile":
            case "tile10":return tile10;
            case "Ground 3 Tile":
            case "tile11":return tile11;
            case "Ground 4 Tile":
            case "tile12":return tile12;
            case "Ground 5 Tile":
            case "tile13":return tile13;
            case "Ground 6 Tile":
            case "tile14":return tile14;
            case "Power Up Tile":
            case "tile3":return tile3;
            case "Trigger Tile":
            case "tile8":return tile8;
            case "Enemy Spawn Tile":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
