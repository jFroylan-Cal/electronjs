const { app, BrowserWindow } = require('electron')
const url = require('url');
const path = require('path')


const reactServer = 'http://localhost:3000/'
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
    });
    mainWindow.webContents.openDevTools();

    const startUrl = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file'
    });
    mainWindow.loadURL(reactServer);
}

app.whenReady().then(createWindow);