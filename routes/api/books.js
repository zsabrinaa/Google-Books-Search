const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create);

  router
  .route("/saved")
  .post(booksController.create)
  .get(booksController.findAll)
  .put(booksController.update)
  .delete(booksController.remove);

router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
