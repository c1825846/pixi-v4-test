import { App } from './app'

import { appOptions } from 'config/app'

export const initApp = () => {
  const appContainer = document.createElement('div')
  appContainer.classList.add('app')
  document.body.appendChild(appContainer)

  const app = new App(appContainer, appOptions)

  app.start()
}
