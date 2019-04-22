const express = require("express");
const app = express();

app.set("view engine", "pug");

const books = [
  {
    id: 0,
    name: "Creator's power",
    author: "Ibitoye Best",
    url: "book/1",
    available: "This book is available",
    date: new Date()
  },
  {
    id: 1,
    name: "Wide as the sky",
    author: "Todd Dullany",
    url: "book/1",
    available: "This book is available",
    date: new Date(new Date().setDate(new Date().getDate() - 1))
  },
  {
    id: 2,
    name: "Oceans",
    author: "Todd Dullany",
    url: "book/2",
    available: "This book is not available",
    date: new Date(new Date().setDate(new Date().getDate() - 3))
  },
  {
    id: 4,
    name: "Break every chain",
    author: "Todd Dullany",
    url: "book/3",
    available: "This book is available",
    date: new Date(new Date().setDate(new Date().getDate() - 4))
  },
  {
    id: 5,
    name: "Open heavens",
    author: "Todd Dullany",
    url: "book/4",
    available: "This book is not available",
    date: new Date(new Date().setDate(new Date().getDate() - 5))
  }
];
const router = express.Router();

router.get("/", function(req, res) {
  res.render("books", {
    title: "Amazon Book store",
    message: "Welcome to Amazon store",
    books
  });
});

router.get("/book/:page", function(req, res) {
  const { page } = req.params;
  const book = books[page - 1];

  res.render("book", { title: "Amazon Book store", book });
});

router.get("/newbook", function(req, res) {
  res.render("newbook", { title: "Add a new book" });
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
