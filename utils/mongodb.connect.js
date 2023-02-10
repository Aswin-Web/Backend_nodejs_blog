const mongoose = require("mongoose");

const connectMongo =async () => {
 return await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@inventory.ce7ild2.mongodb.net/intern?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
    {
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  ).then(()=>{
    console.log('MongoDB connected successfully');
  })
};

module.exports = connectMongo;
