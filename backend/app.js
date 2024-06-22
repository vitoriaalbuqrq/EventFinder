const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// Serve arquivos estáticos da pasta "uploads"
app.use('/uploads', express.static('uploads'));

// DB Connection
const conn = require("./db/conn");
conn();

//Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor Online!");
});
