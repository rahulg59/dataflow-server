const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const { dataConnections } = require("./modules/system-settings/data-connections");
const { clusterSetup } = require("./modules/system-settings/cluster-setup");
const { emailNotification } = require("./modules/system-settings/email-notification");
const { unwantedCharacters } = require("./modules/system-settings/unwanted-characters");
const { stagingSetup } = require("./modules/system-settings/staging-setup");
const { jobConfigurations } = require("./modules/job-configurations/job-configurations");
const { jobHistory } = require("./modules/job-configurations/job-history");
const { consolidateActivity } = require("./modules/job-configurations/consolidate-activity.js");
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
emailNotification(app, '/dataflow/system-settings/email-notification-config');
unwantedCharacters(app, '/dataflow/system-settings/unwanted-characters');
stagingSetup(app, '/dataflow/system-settings/staging-setup');
jobConfigurations(app, '/dataflow/jobs');
jobHistory(app, '/dataflow/jobs');
consolidateActivity(app, '/dataflow/job/consolidate')



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
