const fs = require("fs");
const path = require("path");
const jobHistory = (app, baseEndPoint) => {

    // Get All Job History
    app.get(`${baseEndPoint}/run-history`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/job-configurations/job-history/job-instance-history.json")
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

    // Get instance summary instance id
    app.get(`${baseEndPoint}/run-history/:id`, (req, res) => {
        let id = req.params.id;
        let rawdata;
        if(id && id == "1" || id == "2")
        rawdata = fs.readFileSync(
            path.resolve(__dirname, `../../res/job-configurations/job-history/job-instance-summary-${id}.json`)
        );
        let responseObject = {
            data: [],
            message: "",
            error: null,
            status: "success"
        }
        if(rawdata) {
            let data = JSON.parse(rawdata);
            if(data) {
                responseObject.data = data;
            }
        }
        res.send(responseObject);
    });

    // Delete Config
    app.delete(`${baseEndPoint}/:id`, (req, res) => {
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
  
exports.jobHistory = jobHistory;