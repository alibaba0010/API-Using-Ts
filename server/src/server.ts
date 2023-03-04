import { createServer } from "http";
// import App from "./app";
import connectDB from "db";
import config from "config";
const PORT = config.get<Number>("PORT");
const uri = config.get("MONGO_URI");

const server = createServer();

(async () => {
  // await connectDB(uri);
  server.listen(PORT, () =>
    console.log(`Listening to port http://localhost:${PORT}`)
  );
})();
