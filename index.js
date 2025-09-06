import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json()); //Middleware to parse Json

//Basic Route

app.get("/", (req, res) => {
  res.json({ message: "Hello there!" });
});

//Start Server

app.listen(PORT,()=>{
 console.log(`Listening on port:${PORT}`)
})
