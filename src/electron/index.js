const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("path");
const url = require("url");

const { loadFile, loadConfiguration } = require("./file");
const Mojang = require("./mojang");

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:1234");
    // Open the DevTools.
    win.webContents.openDevTools();
  }

  // Init the file
  loadConfiguration();

  // Handle ipcRender
  listenIpcRender(win);

  Mojang.getVersions().then((v) => console.log(v));
}

function listenIpcRender() {
  ipcMain.on("isJavaAvailable", (event, arg) => {
    event.reply("here");
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
