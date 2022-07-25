import mongoose from "mongoose";

let info = new mongoose.Schema({
  name: String,
  symbol: String,
  rank: String ,
  price: String ,
  supply: String,

})

export default mongoose.model("ticker", info);