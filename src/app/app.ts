import { Application, loader } from 'pixi.js'
import * as TWEEN from '@tweenjs/tween.js'

import { Game } from 'components/game'
import { manifest } from 'assets'

export class App {
  app: Application

  constructor(readonly appContainer: HTMLDivElement) {
    this.app = new Application()
    appContainer.appendChild(this.app.view)

    const update = () => {
      TWEEN.update()
      requestAnimationFrame(update)
    }

    update()
  }

  async start() {
    await new Promise<void>(res => {
      loader.add(manifest).load(() => {
        res()
      })
    })

    const game = new Game()
    this.app.stage.addChild(game)
  }
}
