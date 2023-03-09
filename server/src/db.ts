import pkg from "mongoose";
import { log } from "./services/logger";
const { connect, connection, set } = pkg;

const connectDB = async (url: string) => {
  try {
    connection.once("open", () => log.info("MongoDB connected"));
    set("strictQuery", true);
    return await connect(url);
  } catch (e) {
    process.exit(1);
  }
};

export default connectDB;
