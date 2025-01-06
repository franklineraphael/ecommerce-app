import express from "express";
import cors from "cors";
import "dotenv/config";

// App config
const app = express();
const port = process.env.PORT || 4000;

// midllewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => console.log("Server started on PORT :" + port));
