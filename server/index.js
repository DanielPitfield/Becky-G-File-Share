const express = require("express");
const app = express();
const port = 5000;

const path = require("path");

const multer = require("multer");
const MAX_FILE_SIZE_MB = 10;
// The maximum number of files which can be uploaded at once
const MAX_NUM_FILES = 10;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Images/");
  },
  filename: function (req, file, cb) {
    const formattedDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "short", timeStyle: "medium" })
      .format(new Date())
      .replace(/[^0-9]/gi, "-");
    cb(null, `${formattedDate}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage, limits: { fileSize: Math.pow(MAX_FILE_SIZE_MB, 6) } });

app.post("/upload", upload.array("fileInput", MAX_NUM_FILES), (req, res) => {
  for (const file of req.files) {
    console.log(file);
  }

  res.send("Files uploaded");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
