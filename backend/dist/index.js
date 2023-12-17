"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const connection_js_1 = __importDefault(require("./db/connection.js"));
// connections and listener
const PORT = process.env.PORT || 3000;
(0, connection_js_1.default)()
    .then(() => app_js_1.default.listen(PORT, () => console.log("server open and database connected")))
    .catch(error => console.log(error));
//# sourceMappingURL=index.js.map