function generateReport(data) {
  const reportContainer = document.getElementById('exif-result')

  console.log(data.gps.GPSLatitudeRef)

  let content = `
  <h2>Image Contents:</h2>`

  try {
    content += `<p><strong>Coordinates: ${data.gps.GPSLatitudeRef} ${data.gps.GPSLatitude[0]}°${data.gps.GPSLatitude[1]}'${data.gps.GPSLatitude[2]}", ${data.gps.GPSLongitudeRef} ${data.gps.GPSLongitude[0]}°${data.gps.GPSLongitude[1]}'${data.gps.GPSLongitude[2]}"</strong></p>`

    content += `
    <p><a href="https://www.google.com/maps/place/${data.gps.GPSLatitude[0]}%C2%B0${data.gps.GPSLatitude[1]}'${data.gps.GPSLatitude[2]}%22N+${data.gps.GPSLongitude[0]}%C2%B0${data.gps.GPSLongitude[1]}'${data.gps.GPSLongitude[2]}%22W">Google Maps Link</a></p>`
  }
  catch {

  }

  for (var key in data) {
    content += `<h2>${key}</h2>`
    for (var childKey in data[key]) {
      content += `<p>${childKey}:${data[key][childKey]}</p>`
    }
  }

  content += `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1797815842424!2d-83.8497830845025!3d43.64442777912159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM4JzM5LjkiTiA4M8KwNTAnNTEuMyJX!5e0!3m2!1sen!2sus!4v1580759464539!5m2!1sen!2sus"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>  
  `

  reportContainer.innerHTML = content
}

document.getElementById('image-submit').addEventListener('click', function () {
  // submit image and get response
  const cordsURL = 'https://toby-exif.herokuapp.com/cords'
  const photo = document.getElementById('image-file').files[0]

  const formData = new FormData()

  formData.set('sampleFile', photo, photo.name)

  console.log(formData.get('sampleFile'))

  console.log(photo)

  $.ajax({
    url: cordsURL,
    processData: false,
    contentType: false,
    data: formData,
    method: 'POST',
    success: function (data) {
      console.log('ok')

      console.log(data)

      generateReport(data)
    },
    error: function (xhr, status, error) {
      console.log('failed')
      console.log(error)
    }

  })

})
