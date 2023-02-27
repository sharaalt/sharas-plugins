/**
 * @name A funny plugin
 * @author sharafzada#8655
 * @description Test plugin
 * @version 1.0.0
 * @authorId 610465001169485875
 * @invite https://discord.gg/2HmFJ7fcr9
 */
module.exports = class MyPlugin {
  constructor(meta) {
    console.log("Success");
    
  }
  start() {
      BdApi.alert("Hello!", "Thank's for using my plugin hope you use if and have fun.");
      BdApi.showNotice("Test")
  }
  stop() {
    console.log("Plugin has exited successfully.")
    
  }
};