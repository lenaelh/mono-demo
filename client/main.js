const container = document.getElementById('app')

async function fetchImages() {
  // let data = await fetch(`${import.meta.env.VITE_ServerURL}/images`)
  let data = await fetch('http://localhost:7070/images')
  let result = await data.json()
  return result
}

async function makeImages() {
  let images = await fetchImages()
  images.forEach(image => {
    let imgTag = document.createElement('img')
    imgTag.src = image.image
    container.appendChild(imgTag)
  })
}

makeImages()