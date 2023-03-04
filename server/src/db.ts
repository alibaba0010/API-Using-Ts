import pkg from "mongoose";
const { connect, connection } = pkg;

const connectDB = async (url: string) => {
  try {
    connection.once("open", () => console.log("MongoDB connected"));
    return await connect(url);
  } catch (e) {
    process.exit(1);
  }
};

export default connectDB;
