const express = require("express");
const cors = require("cors");
const ongRouter = require("./routes/ong-route");
const voluntaryRouter = require("./routes/voluntary-route");
const additionRouter = require("./routes/additions-route");
const workRouter = require("./routes/work-route");

//MongoDb
require("./db");

const app = express();
app.use(cors());
app.use(express.json());
//root page
app.use("/api/ong", ongRouter);
app.use("/api/voluntary", voluntaryRouter);
app.use("/api/addition", additionRouter);
app.use("/api/work", workRouter);

app.use("/api", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => console.log("App is running at 5000"));
