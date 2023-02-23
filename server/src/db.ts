import pkg from "mongoose";
const { connect, connection } = pkg;

const connectDB = async (url: string) => {
  connection.once("open", () => console.log("MongoDB connected"));
  return await connect(url);
};

export default connectDB;
