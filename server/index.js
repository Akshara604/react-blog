const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer =require("multer");
const path = require("path");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")) )

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }).then(console.log("Connected to mongo")).catch((err) => console.log(err));
}

const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    //cb: callback
    cb(null,"images");
  },
  filename:(req,file,cb) =>{
    //cb: callback
    cb(null,req.body.name);
  }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) =>{
  res.json("File has been uploaded!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
// We are gonna use html, css and javascript
app.use(express.static(path.join(__dirname, "/client/build")));
// * denotes "if the server gets any request"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening at port 5000")
});