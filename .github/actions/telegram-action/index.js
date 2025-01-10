const core = require("@actions/core");
const TelegramBot = require("node-telegram-bot-api");

const token = core.getInput("telegram_token");
const chatId = core.getInput("telegram_id_user");
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
