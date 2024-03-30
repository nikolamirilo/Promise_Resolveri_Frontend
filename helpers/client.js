import { BACKEND_URL } from "../constants"

export async function fetchData(path, options) {
  try {
    const { method, cache, body } = options
    const res = await fetch(`${BACKEND_URL}${path}`, {
      method,
      cache: cache || "force-cache",
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    console.log(options)
    console.log(`${BACKEND_URL}${path}`)
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function uploadImagesToCloudinary(files, images) {
  const upload_preset = "hackathon"
  const maxSizeMB = 3
  const resizeImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target?.result
        img.onload = () => {
          const canvas = document.createElement("canvas")
          const ctx = canvas.getContext("2d")
          const maxSize = maxSizeMB * 1024 * 1024

          let width = img.width
          let height = img.height

          if (file.size > maxSize) {
            const scaleFactor = Math.sqrt(maxSize / file.size)
            width = Math.floor(width * scaleFactor)
            height = Math.floor(height * scaleFactor)
          }

          canvas.width = width
          canvas.height = height

          ctx.drawImage(img, 0, 0, width, height)

          canvas.toBlob((blob) => {
            resolve(blob)
          }, file.type)
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const formData = new FormData()
  formData.append("upload_preset", upload_preset)
  if (files)
    for (let i = 0; i < files.length; i++) {
      let file = files[i]

      try {
        const resizedBlob = await resizeImage(file)
        if (!resizedBlob) {
          console.error(`Error resizing file ${file.name}`)
          continue
        }

        formData.append("file", resizedBlob, file.name)

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        )
        if (!response.ok) {
          console.error(`Error uploading file ${file.name}`)
          console.log(response)
          continue
        }
        const res = await response.json()
        images.push(res.url)
      } catch (error) {
        console.error(`Error uploading file ${file.name}: ${error.message}`)
      } finally {
        formData.delete("file")
      }
    }
}
