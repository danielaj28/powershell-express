module.exports.setup = function (app) {
  app.get("/webhook/", (req, res) => {

    console.log("Request received");
    res.status(200);
    res
    .status(200)
    .json(
      "Webhook Triggered"
    );

    var spawn = require("child_process").spawn,
      child;
    child = spawn("powershell.exe", ["c:\\temp\\pstest.ps1"]);
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
    
    console.log("Powershell passed");
  });
  return;
};
