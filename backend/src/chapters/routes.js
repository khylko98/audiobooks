const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/:book_id", controller.getChapterByBookId);

module.exports = router;
