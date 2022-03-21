const multer = require("multer");
const path = require("path");

const directory = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, directory);
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.random().toString();
    cb(null, uniquePrefix + "-" + file.originalname);
  },
});
