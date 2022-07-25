import db from "../db/connection.js";
import Ticker from "../models/tickers.js";

// import your crypto Model
import axios from "axios";

const insertData = async () => {
  // Drop database
  await Ticker.deleteMany({});
  const response = await axios.get("https://api.coincap.io/v2/assets")

  const filteredData = response.data.data.map((data) => {
    return ({
      name: data.name,
      symbol: data.symbol,
      rank: (data.rank),
      price: (data.priceUsd),
      supply: (data.supply),
    })
  })

  await Ticker.insertMany(filteredData)

  // insert data to model

  db.close();

}

insertData();