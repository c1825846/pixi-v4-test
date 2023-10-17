import { Container, Sprite, Texture } from 'pixi.js'

import { Tumbleweed } from './tumbleweed'

import { assetKeys } from 'assets/keys'

export class Game extends Container {
  tumbleweed: Tumbleweed

  constructor() {
    super()

    const background = Sprite.from(assetKeys.background)
    this.addChild(background)

    this.tumbleweed = new Tumbleweed(Texture.from(assetKeys.tumbleweed))
    this.addChild(this.tumbleweed)

    this.interactive = true
    this.on('pointerup', e => {
      this.moveTumbleweed(e.data.global.x, e.data.global.y)
    })
  }

  moveTumbleweed(x: number, y: number) {
    this.tumbleweed.move(x, y, 800)
  }
}
