document.getElementById('image-submit').addEventListener('click', function () {
  // submit image and get response
  const photo = document.getElementById('image-file').files[0]

  const formData = new FormData()

  formData.append('photo', photo)

  console.log(photo)

  // fetch('https://toby-exif.herokuapp.com/cords', { method: 'POST', body: formData })
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((myJson) => {
  //     console.log(myJson)
  //   })

  $.ajax({
    url: 'https://toby-exif.herokuapp.com/cords',
    // data: formData,
    method: 'POST',
    success: function (data) {
      console.log('ok')

      console.log(data)
    },
    error: function (xhr, status, error) {
      console.log('failed')
      console.log(error)
    }

  })

})
