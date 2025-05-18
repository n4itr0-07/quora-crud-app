const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // Updated for Railway
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Redirect root to /posts
app.get("/", (req, res) => {
  res.redirect("/posts");
});

let posts = [
  {
    id: uuidv4(),
    username: "Virat Kholi",
    content: "This is my first post",
  },
  {
    id: uuidv4(),
    username: "Ms Dhoni",
    content: "I am the most successful captain of India",
  },
  {
    id: uuidv4(),
    username: "AB Devilliers",
    content: "They call me Mr. 360",
  },

  {
    id: uuidv4(),
    username: "Rohit Sharma",
    content: "I am the captain of India",
  },
  {
    id: uuidv4(),
    username: "Sachin Tendulkar",
    content: "I am the God of Cricket",
  },
  {
    id: uuidv4(),
    username: "Brian Lara",
    content: "I am the highest run scorer in Test cricket",
  },
  {
    id: uuidv4(),
    username: "Shane Warne",
    content: "I am the best leg spinner in the world",
  },
  {
    id: uuidv4(),
    username: "Wasim Akram",
    content: "I am the best fast bowler in the world",
  },
  {
    id: uuidv4(),
    username: "Jacques Kallis",
    content: "I am the best all-rounder in the world",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  console.log(req.body);
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((post) => post.id === id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((post) => post.id === id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect("/posts");
});

const host = "0.0.0.0";
app.listen(port, host, () => {
  // Modify this line
  console.log(`Server running at http://${host}:${port}`);
});
