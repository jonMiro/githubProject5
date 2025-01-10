const core = require("@actions/core");
const TelegramBot = require("node-telegram-bot-api");

const token = core.getInput("token");
const chatId = core.getInput("chat_id");
const message = core.getInput("message");

// Crear una instancia del bot
const bot = new TelegramBot(token);

async function sendMessage() {
  try {
    await bot.sendMessage(chatId, message);
    core.info("Missatge enviat!");
  } catch (error) {
    core.setFailed(`Error al enviar: ${error.message}`);
  }
}

sendMessage();
