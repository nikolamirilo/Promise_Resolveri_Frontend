"use server"
import { fetchData } from "@/helpers/client"

export async function createNewUser(newUser) {
  try {
    const res = await fetchData("/User", {
      method: "POST",
      body: JSON.stringify(newUser),
    })
    return res
  } catch (err) {
    console.log(err)
  }
}
