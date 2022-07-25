import mongoose from "mongoose"
mongoose.connect(`mongodb+srv://marioL1988:${process.env.DB_PASS}@cluster0.f15dnoh.mongodb.net/?retryWrites=true&w=majority`)