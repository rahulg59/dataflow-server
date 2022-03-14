const fs = require("fs");
const path = require("path");
const consolidateActivity = (app, baseEndPoint) => {

    // Get All Job History
    app.get(`${baseEndPoint}/:json`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, `../../res/job-configurations/staging-configuration/${req.params.json}`)
    );
    let responseObject = {
        data: [],
        message: "",
        error: null,
        status: "success"
    }
    let data = JSON.parse(rawdata);
    responseObject.data = data;
    res.send(responseObject);
    });

};
  
exports.consolidateActivity = consolidateActivity;