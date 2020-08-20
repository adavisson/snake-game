const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

const path = require('path')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 800,
    resizable: false,
    center: true,
    titleBarStyle: 'hidden',
  })

  const startURL = isDev
    ? 'http://localhost:8080'
    : `file://${path.join(__dirname, '../build/index.html')}`

  mainWindow.loadURL(startURL)

  mainWindow.once('ready-to-show', () => mainWindow.show())
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
