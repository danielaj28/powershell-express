module.exports.runScript = function (ScriptPath, callback) {
  try {
    var spawn = require("child_process").spawn,
      child;
    child = spawn("powershell.exe", [ScriptPath]);
    child.stdout.on("data", function (data) {
      //console.log("Powershell Data: " + data);
    });
    child.stderr.on("data", function (data) {
      //console.log("Powershell Errors: " + data);
    });
    child.on("exit", function () {
      //console.log("Powershell Script finished");
      callback(true);
    });
    child.stdin.end(); //end input
  } catch (error) {
    console.error(
      `Error when executing powershell script: ${ScriptPath}, error: ${error}`
    );
    callback(false);
  }
};

module.exports.setup = function (app) {
  app.post("/webhook/:token", (req, res) => {
    console.log("Request received");

    if (app.config.webhooks[req.params.token] != undefined) {
      this.runScript(app.config.webhooks[req.params.token], (success) => {
        if (success) {
          res.status(200).json("Webhook Triggered");
          console.log("Powershell passed");
        } else {
          res.status(404).json("Webhook Not Found");
        }
      });
    } else {
      res.status(404).json("Webhook Not Found");
      console.error("Access token was not recognised: ", req.params.token);
    }
    return;
  });
};
