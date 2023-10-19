import { Application, loader } from 'pixi.js'
import * as TWEEN from '@tweenjs/tween.js'

import { Game } from 'components/game'

import { checkIsOnMobile } from 'utils/device'
import { openFullscreen } from 'utils/fullscreen'

import { manifest } from 'assets'

export interface AppOptions {
  maxWidth: number
  maxHeight: number
  gameWidth: number
  gameHeight: number
}

export class App {
  app: Application
  game: Game

  constructor(readonly appContainer: HTMLDivElement, private readonly option: AppOptions) {
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
    const isOnMobile = checkIsOnMobile()
    if (isOnMobile) {
      this.game.once('pointerup', () => {
        openFullscreen(this.appContainer)
      })
    }
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
    const targetViewAspectRatio = this.option.gameWidth / this.option.gameHeight

    let gameScalar = 1

    if (windowAspectRatio <= targetViewAspectRatio) {
      this.app.view.width = isOnMobile ? windowWidth : Math.min(windowWidth, this.option.maxWidth)
      this.app.view.height = this.app.view.width / targetViewAspectRatio
      gameScalar = this.app.view.width / this.option.gameWidth
    } else {
      this.app.view.height = isOnMobile ? windowHeght : Math.min(windowHeght, this.option.maxHeight)
      this.app.view.width = this.app.view.height * targetViewAspectRatio
      gameScalar = this.app.view.height / this.option.gameHeight
    }

    this.game.scale.set(gameScalar)
    this.app.renderer.resize(this.app.view.width, this.app.view.height)
  }
}
