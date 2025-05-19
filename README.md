# Quora-like CRUD App (Express.js)

A simple CRUD application built with Node.js and Express for learning purposes.

## Features
- Create, Read, Update, Delete posts
- Basic user authentication simulation
- EJS templates for server-side rendering
- RESTful routing with method-override
- CSS using ChatGPT

## Tech Stack
- **Backend**: Node.js, Express
- **Frontend**: EJS, Vanilla CSS
- **Database**: In-memory array (for learning)

## Setup
1. Clone repo
   ```bash
   git clone https://github.com/n4itr0-07/quora-crud-app.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start server
   ```bash
   node index.js
   ```
4. Open in browser: `http://localhost:8000`

## Project Structure
```bash
/
├── index.js         # Main app file
├── views/
│   ├── index.ejs    # All posts
│   ├── show.ejs     # Single post
│   ├── new.ejs      # Create form
│   └── edit.ejs     # Edit form
├── public/
│   └── style.css    # Styles
└── package.json     # Dependencies
```
## Learning Notes
- Uses Express routing with RESTful conventions
- Demonstrates CRUD operations without a database
- Uses UUID for post IDs

> Note: This is a learning project, not production-ready code.


### Key Features:
- No hosting/deployment instructions (since it's local-only)
- Focuses on learning aspects
- Minimalist structure
- Clear setup instructions
- No unnecessary sections

---
