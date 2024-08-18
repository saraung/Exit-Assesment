const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

require('./connection');

const BlogModel = require('./model');

//Write your POST API here
app.post("/add", async (req, res) => {
  try {
    const { title, content, img_url } = req.body;
    const newBlog = new BlogModel({
      title,
      content,
      img_url,
    });
    await newBlog.save();
    res.status(201).send({ message: "Blog  added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred while adding the blog entry." });
  }
});


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
