const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");

router.get("/", controller.index);
router.get("/single/:slug", controller.show);

module.exports = router;