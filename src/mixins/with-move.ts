import { Container, Point } from 'pixi.js'
import { Tween, Easing } from '@tweenjs/tween.js'

import { calculateQuadraticBezierPath } from 'utils/bezier'

export const withMove = <TBase extends new (...args: any[]) => Container>(Base: TBase) => {
  return class extends Base {
    tween: Tween<{ x: number; y?: number }>

    constructor(...args: any) {
      super(...args)
    }

    moveLinear(point: Point, duration = 1000) {
      this.tween?.stop()
      this.tween = new Tween(this.position).to(point, duration).easing(Easing.Sinusoidal.Out).start()
    }

    moveCurved(point: Point, duration = 1000) {
      const controlPoint = new Point(
        Math.random() * Math.abs(point.x - this.x),
        Math.random() * Math.abs(point.y - this.y)
      )
      const path = calculateQuadraticBezierPath(this.position, controlPoint, point)

      this.tween?.stop()
      this.tween = new Tween({ x: 0 })
        .to({ x: path.length - 1 }, duration)
        .easing(Easing.Sinusoidal.Out)
        .onUpdate(({ x }) => {
          this.position = path[Math.floor(x)]
        })
        .start()
    }
  }
}
