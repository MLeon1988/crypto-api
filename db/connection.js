import chalk from "chalk";
import mongoose from "mongoose"

let connectionString = process.env.DB_URL || "mongodb://127.0.0.1:27017/Crypto"

mongoose.connect(connectionString)
mongoose.set("returnOriginal", false);

const db = mongoose.connection

db.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

db.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});


export default db;