import app from "./app/app.js";
import config from "./config/config.js"
import connectToDB from "./config/db.js"
const PORT = config.PORT || 3000;

await connectToDB();


app.listen(PORT, () => {
    console.log(`Server Started at Port : `, PORT);
});