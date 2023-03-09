import { createServer } from "http";
import app from "./app";
import connectDB from "./db";
import config from "config";
import { log } from "./services/logger";
const PORT = config.get<number>("PORT");
const uri = config.get<string>("MONGO_URI");
const server = createServer(app);

(async () => {
  // await connectDB(uri);
  server.listen(PORT, () =>
    log.info(`Listening to port http://localhost:${PORT}`)
  );
})();
