const express = require("express");
const app = express();
const port = 5000;

const multer = require("multer");
// Where are the uploaded images stored?
const upload = multer({ dest: "Images/" });
// The maximum number of files which can be uploaded at once
const MAX_NUM_FILES = 10;

app.post("/upload", upload.array("fileInput", MAX_NUM_FILES), (req, res) => {
  for (const file of req.files) {
    console.log(file);
  }

  res.send("Files uploaded");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
