"use client"
import ImageInput from "@/components/common/ImageInput"
import MultiSelect from "@/components/common/MultiSelect"
import { uploadImagesToCloudinary } from "@/helpers/client"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useRef, useState } from "react"
import { LuLoader2 } from "react-icons/lu"
import Input from "../../components/common/Input"
import TextArea from "../../components/common/TextArea"

const Create = () => {
  const [progress, setProgress] = useState(0)
  const imagesInput = useRef(null)
  const [images, setImages] = useState([])
  const [displayImages, setDisplayImages] = useState([])
  const [files, setFiles] = useState([])
  const locationInput = useRef(null)
  const descriptionInput = useRef(null)
  const liveFeeInput = useRef(null)
  const onlineFeeInput = useRef(null)
  const titleInput = useRef(null)
  const [typeInput, setTypeInput] = useState([])
  const { user } = useUser()

  const handleInputImageChange = async () => {
    setFiles((prevFiles) => [...prevFiles, ...imagesInput?.current?.files])
    const imagesInputFiles = imagesInput?.current?.files
    if (imagesInputFiles) {
      const newImages = await Promise.all(
        Array.from(imagesInputFiles).map((file) => {
          return new Promise((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
              resolve(reader.result)
            }
          })
        })
      )
      setDisplayImages((prevImages) => [...prevImages, ...newImages])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setProgress(50)
      // Checks for files
      if (!files) {
        console.log("No file selected")
      }
      if (files) {
        await uploadImagesToCloudinary(files, images)
        const uploadData = {
          uid: user?.id,
          location: locationInput.current.value,
          description: descriptionInput.current.value,
          liveFee: liveFeeInput.current.value,
          onlineFee: onlineFeeInput.current.value,
          title: titleInput.current.value,
          images,
        }
        // const res = await fetchData(`/Offer`, { method: "POST", body: JSON.stringify(uploadData) })
        console.log(uploadData)

        setProgress(100)
        console.log(images)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const offerTypesInput = [
    { value: "Live", label: "Live" },
    { value: "Online", label: "Online" },
  ]
  return (
    <div className="flex items-center justify-center" id="order">
      <div
        className="flex min-h-screen w-full items-center justify-center bg-none md:bg-cover lg:py-10"
        style={{ backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')` }}>
        <div className="block w-full bg-gray-900 px-4 py-16 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:p-4 md:my-5 md:w-10/12 md:rounded-2xl lg:my-2 lg:w-2/3 lg:p-16 xl:w-1/2">
          <div className="text-center">
            <Image
              className="mx-auto"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <form
            className="mt-8 flex w-full flex-col gap-2"
            encType="multipart/Order-data"
            onSubmit={handleSubmit}>
            <Input
              inputRef={titleInput}
              label="Title:"
              name="title"
              isRequired={true}
              placeholder="e.g. Tours in Paris"
            />
            <Input
              inputRef={locationInput}
              label="Location:"
              name="location"
              isRequired={true}
              placeholder="e.g. Paris"
            />
            <TextArea
              textAreaRef={descriptionInput}
              label="Description:"
              name="description"
              isRequired={false}
            />
            <MultiSelect
              label="Type of support:"
              name="type"
              multiInput={typeInput}
              onChange={(e) => {
                setTypeInput((prevValue) => [...prevValue, e.target.value])
              }}
              isRequired={true}
              options={offerTypesInput}
            />
            {typeInput.includes("Live") == true && (
              <Input
                inputRef={liveFeeInput}
                label="Live support fee:"
                name="live-fee"
                isRequired={true}
                placeholder="e.g. 100$"
              />
            )}
            {typeInput.includes("Online") == true && (
              <Input
                inputRef={onlineFeeInput}
                label="Online support fee:"
                name="online-fee"
                isRequired={true}
                placeholder="e.g. 32"
              />
            )}
            {displayImages.length > 0 ? (
              <div
                className="relative flex h-fit min-h-[10rem] w-full flex-row flex-wrap items-center justify-center gap-1 rounded-lg bg-cover bg-center py-6  md:border
              md:border-violet-700">
                {displayImages.map((image, idx) => {
                  return (
                    <div
                      className="relative h-52 w-full cursor-pointer md:w-1/2 xl:w-[30%]"
                      key={idx}>
                      <Image
                        src={image}
                        fill
                        priority
                        className="object-cover object-center"
                        alt="Input Picture"
                      />
                    </div>
                  )
                })}
              </div>
            ) : (
              <ImageInput
                imagesInput={imagesInput}
                multiple={true}
                title="Upload images"
                handleInputImageChange={handleInputImageChange}
              />
            )}

            <div className="mt-3 flex justify-center">
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                id="submit-button"
                disabled={progress == 0 ? false : true}
                className={`flex w-40 flex-row items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-2 uppercase text-white`}>
                {progress == 50 ? (
                  <LuLoader2
                    className="h-5 w-5 animate-spin rounded-full"
                    color="white"
                    size={25}
                  />
                ) : null}
                {progress == 100 ? "Submited" : progress == 50 ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
