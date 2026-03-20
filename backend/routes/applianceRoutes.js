const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")

const {
addAppliance,
getAppliances
} = require("../controllers/applianceController")

router.post("/", protect, addAppliance)
router.get("/", protect, getAppliances)

module.exports = router