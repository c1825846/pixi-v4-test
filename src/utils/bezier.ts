import { Point } from 'pixi.js'

export function calculateQuadraticBezierPath(start: Point, control: Point, end: Point, segments = 100) {
  const path: Point[] = []

  for (let t = 0; t <= segments; t++) {
    const u = 1 - t / segments
    const tt = t / segments

    const p = new Point(
      u * u * start.x + 2 * u * tt * control.x + tt * tt * end.x,
      u * u * start.y + 2 * u * tt * control.y + tt * tt * end.y
    )

    path.push(p)
  }

  return path
}
