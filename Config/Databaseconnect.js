import mongoose from "mongoose";

const connect = async () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const DB = mongoose.connection;

  DB.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  DB.once("open", () => {
    console.log("MongoDB Connect Successfully ");
  });

  DB.once("Disconnected", () => {
    console.log("MongoDB Disconnected");
  });

  process.on("SIGABRT", () => {
    DB.close(() => {
      console.log("MongoDB Connection close");
      process.exit(0);
    });
  });
};

export default connect;
