var ExifImage = require('exif').ExifImage
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to Toby Exif Data Viewer!'))

app.post('/cords', function (req, res) {
  // res.send(console.dir(req.files))

  try {
    ExifImage({ image: 'walleye.jpg' }, function (error, exifData) {
      if (error) {
        console.log('Error: ' + error.message)
      }
      else {
        console.log(exifData) // Do something with your data!
        res.send(exifData)
      }
    })
  } catch (error) {
    console.log('Error: ' + error.message)
  }
})

app.listen(port, () => console.log(`Toby Exif Viewer listening on port ${port}!`))
