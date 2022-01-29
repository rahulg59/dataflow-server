const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const { dataConnections } = require("./modules/system-settings/data-connections");
const { clusterSetup } = require("./modules/system-settings/cluster-setup");
const baseUrl = "http://localhost:3000/files/";

var corsOptions = {
  // origin: "http://localhost:4200",
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API Works!");
});


dataConnections(app, '/dataflow/system-settings/data');
clusterSetup(app, '/dataflow/system-settings/cluster');



// // Read Variable JSON
// app.get("/variables/:docId", (req, res) => {
//   let rawdata = fs.readFileSync(
//     path.resolve(__dirname, "./data/variables.json")
//   );

//   let data = JSON.parse(rawdata);

//   res.send(data);
// });

// // Update Variable Value JSON
// app.post("/review/updateVariable", (req, res) => {
//   const payload = req.body;
//   console.log(payload);
//   res.send(`Value Updated Successfully!`);
// });


app.listen(process.env.port || 3000);
console.log("Web Server is listening at port " + (process.env.port || 3000));
