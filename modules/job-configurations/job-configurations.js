const fs = require("fs");
const path = require("path");
const jobConfigurations = (app, baseEndPoint) => {

    // Get All Job Configs
    app.get(`${baseEndPoint}/job-configs`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/job-configurations/job-configuration-list.json")
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

    // Delete Config
    app.delete(`${baseEndPoint}/job-configs/:id`, (req, res) => {
        let responseObject = {
            data: [],
            message: "",
            error: null,
            status: "success"
        }
        let body = req.body;
        if(body) {
            responseObject.message = "Data Deleted Successfully";
        }
        res.send(responseObject);
    });
};
  
exports.jobConfigurations = jobConfigurations;