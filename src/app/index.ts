import { App } from './app'

export const initApp = () => {
  const appContainer = document.createElement('div')
  appContainer.classList.add('app')
  document.body.appendChild(appContainer)

  const app = new App(appContainer)

  app.start()
}
