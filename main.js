// Atom Module to control application life.
var app = require('app')
// Atom Module to create native browser window.
var BrowserWindow = require('browser-window')

var url = process.argv[2];
var width = 800;
var height = 600;
if (process.argv.length == 5) {
  width = parseInt(process.argv[3]);
  height = parseInt(process.argv[4]);
}

var startBrowser = function() {
  var win = new BrowserWindow({
    width: width,
    height: height,
    show : true,
    'enable-larger-than-screen' : true,
    'skip-taskbar' : true,
    'use-content-size' : true
  })

  win.loadUrl(url);
}

app.on('ready', function() {
  startBrowser();
})
