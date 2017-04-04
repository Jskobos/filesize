const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const multer  = require('multer')
const autoReap  = require('multer-autoreap')
const upload = multer({ dest: 'uploads/' })

app.set('view engine', 'pug')
app.use(require("connect-assets")())
app.use(autoReap)

app.get('/', (req,res) => {
  res.render('index', {title: "File Size", message: "Select a file to determine its size."})
})

app.post('/', upload.single('input-file'), (req,res) => {
  res.json({
    name: req.file.originalname,
    size: req.file.size
  })
})

app.listen(port, () => {
  console.log("Express app listening on port " + port)
})
