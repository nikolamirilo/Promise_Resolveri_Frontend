"use client"
import Checkbox from "@/components/common/Checkbox"
import ImageInput from "@/components/common/ImageInput"
import MultiSelect from "@/components/common/MultiSelect"
import SingleSelect from "@/components/common/SingleSelect"
import { fetchData, uploadImagesToCloudinary } from "@/helpers/client"
import Image from "next/image"
import { useRef, useState } from "react"
import { LuLoader2 } from "react-icons/lu"
import data from "../../data.json"
import Input from "../common/Input"
import TextArea from "../common/TextArea"

const RegisterUser = ({ user }) => {
  const [progress, setProgress] = useState(0)
  const imagesInput = useRef(null)
  const [images, setImages] = useState([])
  const [displayImages, setDisplayImages] = useState([])
  const [files, setFiles] = useState([])
  const [languagesInput, setLanguagesInput] = useState([])
  const countryInput = useRef(null)
  const phoneInput = useRef(null)
  const descriptionInput = useRef(null)
  const isGuideInput = useRef(null)
  const isTouristInput = useRef(null)
  const ageInput = useRef(null)
  const genderInput = useRef(null)
  const isVerifiedInput = useRef(null)
  const licenseInput = useRef(null)

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
        console.log("No file MultiSelected")
      }
      if (files) {
        await uploadImagesToCloudinary(files, images)
        if (user) {
          const uploadData = {
            uid: user?.uid,
            fullName: user.fullName,
            image: images.length > 0 ? images[0] : user.image,
            email: user.email,
            country: countryInput.current.value,
            phoneNumber: phoneInput.current.value,
            age: ageInput.current.value,
            languages: languagesInput,
            description: descriptionInput.current.value,
            isGuide: isGuideInput.current.checked,
            isTourist: isTouristInput.current.checked,
            gender: genderInput.current.value,
            isVerified: isVerifiedInput.current.checked,
            license: licenseInput.current.value,
          }
          const res = await fetchData(`/User`, {
            method: "PATCH",
            body: JSON.stringify(uploadData),
          })
          console.log(res)
          setProgress(100)
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
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
            <MultiSelect
              label="Languages:"
              name="languages"
              multiInput={languagesInput}
              onChange={(e) => {
                setLanguagesInput((prevValue) => [...prevValue, e.target.value])
                console.log(languagesInput)
              }}
              isRequired={true}
              options={data.languages}
            />
            <SingleSelect
              label="Gender:"
              name="gender"
              selectRef={genderInput}
              isRequired={true}
              options={genderOptions}
            />
            <SingleSelect
              label="Country:"
              name="country"
              selectRef={countryInput}
              isRequired={true}
              options={data.countries}
            />
            <Input
              inputRef={ageInput}
              label="Age:"
              name="age"
              isRequired={true}
              placeholder="e.g. 24"
            />
            <Input
              inputRef={phoneInput}
              label="Phone:"
              name="phone"
              isRequired={true}
              placeholder="e.g. +3816xxxxxxxx"
            />

            <TextArea
              textAreaRef={descriptionInput}
              label="Description:"
              name="description"
              isRequired={false}
            />
            <Checkbox inputRef={isGuideInput} name="is-guide" label="Is Guide?" />
            <Checkbox inputRef={isTouristInput} name="is-tourist" label="Is Tourist?" />
            <Checkbox inputRef={isVerifiedInput} name="is-verified" label="Is Verified?" />
            <Input inputRef={licenseInput} label="License:" name="license" isRequired={false} />
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
                multiple={false}
                handleInputImageChange={handleInputImageChange}
                title="Upload profile image"
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

export default RegisterUser
