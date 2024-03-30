import "server-only"

import { createAI, render } from "ai/rsc"
import { OpenAI } from "openai"
export const AI = createAI({
  actions: {
    submitUserMessage,
  },
  initialUIState: [],
  initialAIState: [],
})

const openai = new OpenAI()

async function submitUserMessage(content) {
  "use server"

  const aiState = getMutableAIState()

  // Update AI state with new message.
  aiState.update([
    ...aiState.get(),
    {
      role: "user",
      content,
    },
  ])

  // render() returns a stream of UI components
  const ui = render({
    model: "gpt-4-turbo",
    provider: openai,
    // You may want to construct messages from your AI state
    messages: [
      { role: "system", content: "You are a flight assistant" },
      { role: "user", content: userInput },
    ],
  })

  return {
    id: Date.now(),
    // You can render ui on the client with something like `{message.display}`
    display: ui,
  }
}
