const { Router } = require("express");
const router = Router();
const postRoute = require('./app/routes/postRoute')

router.use('/post', postRoute)

module.exports = router;