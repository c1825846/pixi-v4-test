import { Container, Point, Sprite, Texture } from 'pixi.js'

import { Tumbleweed } from './tumbleweed'

import { assetKeys } from 'assets/keys'

export class Game extends Container {
  tumbleweed: Tumbleweed

  constructor() {
    super()

    const background = Sprite.from(assetKeys.background)
    this.addChild(background)

    this.tumbleweed = new Tumbleweed([
      Texture.from(assetKeys.frame1),
      Texture.from(assetKeys.frame2),
      Texture.from(assetKeys.frame3),
      Texture.from(assetKeys.frame4),
      Texture.from(assetKeys.frame5),
    ])
    this.tumbleweed.position.set(this.width / 2, this.height / 2)
    this.tumbleweed.play(0.1)
    this.addChild(this.tumbleweed)

    this.interactive = true
    this.on('pointerup', e => {
      this.moveTumbleweed(e.data.getLocalPosition(this))
    })
  }

  moveTumbleweed(point: Point) {
    this.tumbleweed.moveCurved(point, 800)
  }
}
