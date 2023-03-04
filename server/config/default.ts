import { config } from "dotenv";
config();

export default {
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URL,
};
