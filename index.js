const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3001;

// Multer setup
const storage = multer.memoryStorage(); // Store files in memory for processing
const upload = multer({ storage });

// Endpoint to handle folder upload
app.post("/upload", upload.array("files"), (req, res) => {
  const files = req.files;
  const paths = req.body.paths;
  console.log('paths', paths);

  if (!files || files.length === 0) {
    return res.status(400).send("No files uploaded.");
  }

  // Base folder path where files will be stored
  const baseUploadPath = "C:/Users/Shankar/Projects";
  console.log("baseUploadPath", baseUploadPath);

  try {
    files.forEach((file, index) => {
      console.log('file: ', file)
      // Extract the relative path from the client
      const relativePath = Array.isArray(paths) ? paths[index] : paths;
      console.log('relativePath', relativePath);
      const filePath = path.join(baseUploadPath, relativePath);
      const folderPath = path.dirname(filePath);

      console.log('filePath', filePath);
      console.log('folderPath', folderPath);
      // Ensure directory exists
      mkdirp.sync(folderPath);

      // Write file
      fs.writeFileSync(filePath, file.buffer);
    });
    console.log('check---------->');
    res.status(200).send("Files uploaded successfully.");
  } catch (error) {
    console.error("Error saving files:", error);
    res.status(500).send("Error saving files.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
