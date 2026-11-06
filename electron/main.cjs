const { app, BrowserWindow, shell, Menu } = require("electron");
const path = require("path");
function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1440, height: 920, minWidth: 900, minHeight: 650,
    title: "StoryForge", autoHideMenuBar: true, backgroundColor: "#101116",
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.loadFile(path.join(__dirname, "..", "www", "index.html"));
  win.webContents.setWindowOpenHandler(({url}) => {
    if (url.startsWith("https://") || url.startsWith("http://")) shell.openExternal(url);
    return {action: "deny"};
  });
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
