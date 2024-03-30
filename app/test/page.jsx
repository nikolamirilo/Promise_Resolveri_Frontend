const page = () => {
  async function submitUserMessage(content) {
    "use server"

    // ... same as above

    const ui = render({
      // ... same as above

      // `text` is called when an AI returns a text response (as opposed to a tool call)
      text: ({ content, done }) => {
        // text can be streamed from the LLM, but we only want to close the stream with .done() when its completed.
        // done() marks the state as available for the client to access
        if (done) {
          aiState.done([
            ...aiState.get(),
            {
              role: "assistant",
              content,
            },
          ])
        }

        return <div>{content}</div>
      },
    })

    return {
      id: Date.now(),
      // You can render UI on the client with something like `{message.display}` and the
      // result yielded in`text` will be displayed on the client and streamed
      // in as it is returned from the model.
      display: ui,
    }
  }
}

export default page
