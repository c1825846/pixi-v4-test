import { Application, loader } from 'pixi.js'
import * as TWEEN from '@tweenjs/tween.js'

import { Game } from 'components/game'

import { checkIsOnMobile } from 'utils/device'

import { manifest } from 'assets'

export class App {
  app: Application
  game: Game

  constructor(readonly appContainer: HTMLDivElement) {
    this.app = new Application({
      resolution: 1,
    })
    window.__PIXI_APP__ = this.app
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

    this.game = new Game()
    this.app.stage.addChild(this.game)

    window.addEventListener('resize', () => {
      this.resize()
    })

    this.resize()
  }

  resize() {
    const isOnMobile = checkIsOnMobile()
    const windowWidth = window.innerWidth
    const windowHeght = window.innerHeight
    const windowAspectRatio = windowWidth / windowHeght
    const targetViewAspectRatio = 5 / 3

    if (windowAspectRatio <= targetViewAspectRatio) {
      this.app.view.width = isOnMobile ? windowWidth : Math.min(windowWidth, 1280)
      this.app.view.height = this.app.view.width / targetViewAspectRatio
    } else {
      this.app.view.height = isOnMobile ? windowHeght : Math.min(windowHeght, 768)
      this.app.view.width = this.app.view.height * targetViewAspectRatio
    }

    this.game.width = this.app.view.width
    this.game.height = this.app.view.height

    this.app.renderer.resize(this.app.view.width, this.app.view.height)
  }
}
