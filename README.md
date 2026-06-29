# File Serve

Node/Express upload server for storing and displaying files.
The project is a small API for uploading PNG, JPG, and PDF files, then fetching them back by name.

## What it was trying to do
- Accept one file or up to ten files per request.
- Save uploads on disk with the original filename.
- Serve uploaded files back through a display endpoint.
- Provide a tiny backend that can be tested manually with Postman.

## Main parts
- index.js - Express server and routes
- public/ - static frontend assets
- Upload routes for single and multiple files
