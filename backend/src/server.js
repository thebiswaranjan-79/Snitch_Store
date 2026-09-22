import app from "./app/app.js";
import config from "./config/config.js"

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started at Port : `, PORT);
});