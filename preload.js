const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('PDFToolInfo', {
  version: '1.0.0',
  buildType: 'portable',
  mode: 'offline'
});
