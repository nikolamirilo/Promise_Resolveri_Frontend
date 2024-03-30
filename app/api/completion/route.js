import { OpenAIStream, StreamingTextResponse, experimental_generateText } from "ai"
import { openai } from "ai/openai"

export const runtime = "edge"

export async function POST(req) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json()

  // Request the OpenAI API for the response based on the prompt
  const result = await experimental_generateText({
    model: openai.chat("gpt-3.5-turbo"),
    maxTokens: 512,
    prompt: `As an insurance expert ${prompt}`,
  })

  const stream = OpenAIStream(result)

  return new StreamingTextResponse(stream)
}
