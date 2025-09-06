import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json()); //Middleware to parse Json

//Basic Route

app.get("/", (req, res) => {
  res.json({ message: "Hello there!" });
});

//Start Server

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});

//get route
app.get("/users", (req, res) => {
  res.json({ message: "get all users" });
});

//post route
app.post("/users", (req, res) => {
  res.json({ message: "create a user" });
});

//put route
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Update user ${userId}` });
});

//delete route

app.delete('/users/:id',(req,res)=>{
  const userId = req.params.id
  res.json({message:`Delete user ${userId}`})
})
