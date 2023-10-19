import { Texture, extras } from 'pixi.js'

export class Animated extends extras.AnimatedSprite {
  constructor(textures: Texture[]) {
    super(textures)

    this.anchor.set(0.5)
  }

  play(animationSpeed = 1) {
    this.animationSpeed = animationSpeed
    super.play()
  }
}
