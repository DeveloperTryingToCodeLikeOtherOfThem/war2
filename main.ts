
//% block="War"
//% color="#003FAD"
namespace war {
    let _wars: War[]

    export function state(): War[] {
        return _wars
    }

    export class War {
        //% block="war"
        war: boolean = true
        //% block="wave"
        wave: number
        //% block="weapons"
        weapons: Tools

        constructor(throwFrom: Sprite, image: Image) {
            this.wave = 1
            this.war = true
            this.weapons.tank.setPosition(80, 60)
            this.weapons.bomb.setPosition(30, 30)
            this.weapons.gun = sprites.createProjectileFromSprite(image, throwFrom, this.direction(50, 20), this.direction(50, 20))
        }

        direction(v: number, v2: number): number {
            forever(function () {
                if (controller.left.isPressed()) {
                    v -= v2
                } else if (controller.right.isPressed()) {
                    v += v2
                }
            })
            return (v)
        }
    }

    export interface Tools {
        sword: Sprite
        gun: Sprite
        bomb: Sprite
        tank: Sprite
    }

    export class BaseToolWar implements Tools {
        sprite: Sprite

        get sword(): Sprite {
            return this.sprite
        }

        set sword(spr: Sprite) {
            game.currentScene().addSprite(spr)
        }

        get gun(): Sprite {
            return this.sprite
        }

        set gun(spr: Sprite) {
            game.currentScene().addSprite(spr)
        }

        get bomb(): Sprite {
            return this.sprite
        }

        set bomb(spr: Sprite) {
            game.currentScene().addSprite(spr)
        }

        get tank(): Sprite {
            return this.sprite
        }

        set tank(spr: Sprite) {
            game.currentScene().addSprite(spr)
        }

        constructor() {
            this.sprite = new Sprite(img`
                    .
                `)
        }
    }

    //% blockId="game_war_sprite" block="$throwObjectsFrom $image"
    //% throwObjectFrom.shadow=variables_get(mySprite)
    //% image.shadow=screen_image_picker
    export function createWar(throwObjectFrom: Sprite, image: Image): War {
        const war = new War(throwObjectFrom, image)
        return war;
    }
}


