const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

//config
dotenv.config({path:"backend/config/config.env"});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.hk8a4.mongodb.net/mernbidi
    ${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     //useCreateIndex: true,
     // useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  });


  cloudinary.config({ 
    cloud_name: 'dkdhxhx9n', 
    api_key: '483314154943496', 
    api_secret: 'A-h4ImTfNsolWHPrM_W5-3klrDQ' 
  });

//server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
