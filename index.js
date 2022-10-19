const express = require("express");

const app = express();
const HTTP_PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Ok",
    message: "Testing build docker image",
  });
});

// 404 handler
app.use((req, res, next) => {
  return res.status(404).json({
    status: false,
    message: "Are you lost?",
  });
});

// 500 handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    status: false,
    message: err.message,
  });
});

app.listen(HTTP_PORT, () => console.log("listening on port", HTTP_PORT));
