const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://saraungbabu:saraung@cluster0.rt5a0yo.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
