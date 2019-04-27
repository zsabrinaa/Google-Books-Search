const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.route("/books/saved")
  .get(booksController.findAll);