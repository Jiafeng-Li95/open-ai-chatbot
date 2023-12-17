import app from "./app.js";
import connectToDatabase from "./db/connection.js";

// connections and listener
const PORT = process.env.PORT || 3000;
connectToDatabase()
    .then(() => app.listen(PORT, () => console.log("server open and database connected")))
    .catch(error => console.log(error));
