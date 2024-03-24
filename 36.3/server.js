/** Start server for Lunchly. */

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(3000, function() {
  console.log("listening on 3000");
});
