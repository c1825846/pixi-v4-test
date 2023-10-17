import { Sprite, Texture } from 'pixi.js'

export class Animated extends Sprite {
  constructor(texture: Texture) {
    super(texture)

    this.anchor.set(0.5)
  }

  play() {}
}
