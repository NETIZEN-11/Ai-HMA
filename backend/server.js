const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

const connectDB = require("./config/db")

// routes
const authRoutes = require("./routes/authRoutes")
const applianceRoutes = require("./routes/applianceRoutes")
const mediaRoutes = require("./routes/mediaRoutes")

dotenv.config()

const app = express()

// connect database
connectDB()

// middleware
app.use(cors())
app.use(express.json())

// serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// test route
app.get("/", (req, res) => {
  res.send("AI Home Maintenance API running")
})

// API routes
app.use("/api/auth", authRoutes)
app.use("/api/appliances", applianceRoutes)
app.use("/api/media", mediaRoutes)

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    message: "Server Error"
  })
})

// server port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})