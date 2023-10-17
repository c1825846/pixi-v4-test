import { Container } from 'pixi.js'
import { Tween, Easing } from '@tweenjs/tween.js'

export const withMove = <TBase extends new (...args: any[]) => Container>(Base: TBase) => {
  return class extends Base {
    tween: Tween<{ x: number; y: number }>

    constructor(...args: any) {
      super(...args)
    }

    move(x: number, y: number, duration = 1000) {
      this.tween?.stop()
      this.tween = new Tween(this.position).to({ x, y }, duration).easing(Easing.Sinusoidal.Out).start()
    }
  }
}
