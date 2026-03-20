const express = require("express")
const router = express.Router()

const { uploadMedia } = require("../controllers/mediaController")
const authMiddleware = require("../middleware/authMiddleware")
const upload = require("../middleware/uploadMiddleware")

router.post("/", authMiddleware, upload.single("media"), uploadMedia)

module.exports = router