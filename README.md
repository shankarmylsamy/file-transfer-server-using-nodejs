# Folder Upload API

## Overview
This project provides an API to upload files along with their relative folder paths. The files are stored on the server in the specified folder structure. It uses Node.js with Express for backend development, Multer for handling file uploads, and mkdirp for creating nested directories.

## Features
Upload multiple files simultaneously.
Specify relative paths to organize files into folders.
Automatic creation of missing directories during upload.
Cross-Origin Resource Sharing (CORS) enabled for compatibility with clients.

# Installation

## Clone the repository:
bash
git clone https://github.com/<your-repo-name>/folder-upload-api.git
cd folder-upload-api

## Install dependencies:
bash
npm install
Usage

## Start the server:
bash
node index.js
The server will start running at http://localhost:3001.

# API 

## Endpoint:
POST /upload: Endpoint to upload files along with folder paths.

## Parameters:
files: Array of files to upload (binary).
paths: Array of relative paths corresponding to each file.

## Example request: Using curl:
bash
curl -X POST -F "files=@file1.txt" -F "files=@file2.txt" -F "paths=folder1/file1.txt" -F "paths=folder2/file2.txt" http://localhost:3001/upload

## Folder Structure
Files are stored under C:/Users/Shankar/Projects with the relative paths provided in the upload request.

## Error Handling
Returns 500 in case of server-side errors during file saving.

## Dependencies
express: Web framework for Node.js..
multer: Middleware for handling multipart/form-data.
mkdirp: Utility for creating nested directories.
cors: Enables CORS to allow cross-origin requests.
fs: File system module for reading and writing files.
path: Utility for working with file and directory paths.

## License
This project is open-source and available under the MIT License.