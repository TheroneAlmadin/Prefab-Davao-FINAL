const path = require('path')
const {app, BrowserWindow} = require('electron')

function createWindow(){
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        backgroundColor: "#282727",
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, 
        }
    })

    if(app.isPackaged){
        mainWindow.loadFile(path.join(__dirname, "../build/index.html"))
    }else{
        mainWindow.loadURL("http://localhost:3000");
    }
}

app.whenReady().then(createWindow)

app.whenReady().then(console.log("LOADED"))

app.on("window-all-closed", () =>{
    if (process.platform !== "darwin"){
        app.quit();
    }
});

app.on('activate', () =>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});