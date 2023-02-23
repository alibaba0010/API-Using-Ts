import { createServer } from "http";
import dotenv from "dotenv";
import App from "./app";

dotenv.config();
const PORT = process.env.PORT || 4000;

const uri = process.env.MONGO_URL;


const server = createServer(App);

(async () => {
  // await connectDB(uri);
  server.listen(PORT, () =>
    console.log(`Listening to port http://localhost:${PORT}`)
  );
})();
