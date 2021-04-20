const webhooks = require("../modules/webhooks");
const fs = require("fs");

test("Run Script", () => {
  fs.writeFileSync("./example/content.txt", ".");
  webhooks.runScript("./example/test.ps1", (success) => {
    let response = fs.readFileSync("./example/content.txt").toString();
    expect(response).toEqual("test string\r\n");
    fs.writeFileSync("./example/content.txt", ".");
  });
});
