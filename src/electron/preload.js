const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  send: (channel, data) => {
    // whitelist channels
    let validChannels = ["toMain"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ["fromMain"];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => fn(...args));
    }
  },
  getJavaVersion: () => {
    var spawn = require("child_process").spawnSync("java", ["-version"]);
    data = spawn.stderr.toString().split("\n")[0];

    var javaVersion = new RegExp("(java|openjdk) version").test(data)
      ? data.split(" ")[2].replace(/"/g, "")
      : undefined;

    return javaVersion || undefined;
  },
});
