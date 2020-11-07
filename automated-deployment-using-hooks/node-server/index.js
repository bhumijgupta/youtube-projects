const express = require("express");
const app = express();

app.all("*", (req, res) => {
  res.json({ status: "The latest App is working" });
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
