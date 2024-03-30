import {
  languageLearningAssistant,
  medicalHelpAssistant,
  restaurantsAssistant,
  travelAssistant,
} from "@/constants"
import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

export const runtime = "edge"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req) {
  // Extract the `messages` from the body of the request
  const { messages, type } = await req.json()
  console.log(type)
  async function assignType() {
    switch (type) {
      case "travel_assistant":
        return travelAssistant
      case "restaurants_assistant":
        return restaurantsAssistant
      case "medical_help_assistant":
        return medicalHelpAssistant
      case "language_learning_assistant":
        return languageLearningAssistant
      default:
        return travelAssistant
    }
  }

  const assistant = await assignType()
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        name: assistant?.role,
        role: "system",
        content: assistant?.content,
      },
      ...messages.map((message) => ({
        role: message.role,
        content: message.content,
        name: message.name,
      })),
    ],
    // max_tokens: 500,
    // temperature: 0.7,
    // top_p: 1,
    // frequency_penalty: 1,
    // presence_penalty: 1,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
