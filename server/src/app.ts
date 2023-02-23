import express, { Application } from "express";
// import cors from "cors";
// import compression from "compression";
// import morgan from "morgan";
// import helmet from "helmet";
// import connectDB from "./db";

// import Error from "@/middleware/error.middleware";
// import Controller from "@/controllers/controller.interface";

// class App {
//   public express: Application;
//   public port: number;
//   public uri = process.env.MONGO_URL;

//   constructor(controllers: Controller[], port: number, uri :string) {
//     this.express = express();
//     this.port = port;

//     this.initialiseDatabaseConnection();
//     this.initialiseMiddleware();
//     this.initialiseControllers(controllers);
//     this.initialiseErrorHandling();
//   }
//   private initialiseMiddleware(): void {
//     this.express.use(helmet());
//     this.express.use(cors());
//     this.express.use(morgan("dev"));
//     this.express.use(express.json());
//     this.express.use(express.urlencoded({ extended: false }));
//     this.express.use(compression());
//   }
//   private initialiseControllers(controllers: Controller[]): void {
//     controllers.forEach((controller: Controller) => {
//       this.express.use("/api/v1", controller.router);
//     });
//   }
//   private initialiseErrorHandling(): void {
//     this.express.use(Error);
//   }
//   private initialiseDatabaseConnection(): void {
//     connectDB(uri);
//   }
// }

export default App;
