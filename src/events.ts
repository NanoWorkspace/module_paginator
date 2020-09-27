import Nano from "@ghom/nano-bot"
import Paginator from "./app/Paginator"

new Nano.Event({
  name: "messageReactionAdd",
  caller: "on",
  description: "Trigger paginator on message reaction add",
  call: async (messageReaction, user) => {
    if (user.bot) return
    const message = messageReaction.message
    const guild = message.guild
    if (guild) {
      const paginator = Paginator.getByMessage(message)
      if (paginator) {
        paginator.handleReaction(messageReaction, user)
      }
    }
  },
})

new Nano.Event({
  name: "messageDelete",
  caller: "on",
  description: "Trigger paginator on message reaction add",
  call: async (message) => {
    const guild = message.guild
    if (guild) {
      Paginator.deleteByMessage(message)
    }
  },
})
