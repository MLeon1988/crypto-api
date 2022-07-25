import Ticker from "../models/tickers.js"

export const getAllTickers = async (req,res) => {
  try{
    let results = await Ticker.find()
    res.json(results)
  }catch (err){
    res.status(500).json({message:err})
  }
}
export const getTicker = async (req,res) => {
  try{
    let { id } = req.params
    let results = await Ticker.find({_id:id})
    res.json(results)
  }catch (err){
    res.status(500).json({message:err})
  }
}
export const updateTicker = async (req,res) => {
  try{
    let { id } = req.params
    let { body } = req
    let updated = await Ticker.findByIdAndUpdate(id,body)
    res.json(updated)
  }catch (err){
    res.status(500).json({message:err})
  }
}
export const deleteTicker = async (req,res) => {
  try{
    let { id } = req.params
    let deleted = await Ticker.findByIdAndDelete(id)
    res.json(deleted)
  }catch (err){
    res.status(500).json({message:err})
  }
}
export const createTicker = async (req,res) => {
  try{
    let { body } = req

    const newTicker = new Ticker(body);
    await newTicker.save();
    res.json(newTicker)
    
  }catch (err){
    res.status(500).json({message:err})
  }
}



