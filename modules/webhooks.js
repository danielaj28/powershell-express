module.exports.setup = function (app) {
  function RunScript(ScriptPath) {
    var spawn = require("child_process").spawn,
      child;
    child = spawn("powershell.exe", [ScriptPath]);
    child.stdout.on("data", function (data) {
      console.log("Powershell Data: " + data);
    });
    child.stderr.on("data", function (data) {
      console.log("Powershell Errors: " + data);
    });
    child.on("exit", function () {
      console.log("Powershell Script finished");
    });
    child.stdin.end(); //end input
  }

  app.post("/webhook/:token", (req, res) => {
    console.log("Request received");

    if (app.config.webhooks[req.params.token] != undefined) {
      RunScript(app.config.webhooks[req.params.token]);
      res.status(200).json("Webhook Triggered");
      console.log("Powershell passed");
    } else {
      res.status(404).json("Webhook Not Found");
      console.error("Access token was not recognised: ", req.params.token);
    }
    return;
  });
};
