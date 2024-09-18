const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
  let existing_users = users.filter((user) => user.username === username );

  if (existing_users.length > 0) {
    return false;
  }

  return true;
}

const authenticatedUser = (username,password)=>{ //returns boolean
  let validusers = users.filter((user) => {
    return (user.username === username && user.password === password)
  });

  if (validusers.length > 0) {
    return true;
  }

  return false;
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(404).json({ message: "Error logging in"});
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign({
      data: username  // Change this to username to ensure the token contains the username, not the password.
    }, "access", { expiresIn: 60 * 60 });  // Ensure "access" matches your secret key used for JWT signing.

    req.session.authorization = {
      accessToken, username  // Store both token and username in the session.
    };

    return res.status(200).json({ message: "User successfully logged in"});
  }

  return res.status(208).json({message: "Invalid Login. Check username and password"});
});


// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = req.session.authorization.username;  // Get the username from session
  const rating = req.query.rating || req.body.rating;  // Expect rating in query or body
  const comment = req.query.comment || req.body.comment;  // Expect comment in query or body

  if (rating && comment) {
    const review = { rating: parseInt(rating), comment };  // Create review object

    // If the user has already reviewed, update it, otherwise add a new review
    if (books[isbn].reviews[username]) {
      books[isbn].reviews[username] = review;
      return res.send(`Review of the book with ISBN ${isbn} updated by ${username}.`);
    } else {
      books[isbn].reviews[username] = review;
      return res.send(`Review of the book with ISBN ${isbn} added by ${username}.`);
    }
  }

  return res.status(404).json({ message: "No rating or comment provided to save or update" });
});




regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = req.session.authorization['username'];

  if (books[isbn].reviews[username]) {
    delete books[isbn].reviews[username];
    return res.send(`Review of the book with the isbn ${isbn} deleted by ${username}.`);
  }

  return res.status(404).json({message: `No review of the book with the isbn ${isbn} for the user ${username} to delete.`});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;