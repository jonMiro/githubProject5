/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 890:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 24:
/***/ ((module) => {

module.exports = eval("require")("node-telegram-bot-api");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(890);
const TelegramBot = __nccwpck_require__(24);

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

module.exports = __webpack_exports__;
/******/ })()
;