const fs = require("fs");
const path = require("path");
const stagingSetup = (app, baseEndPoint) => {

    // Get All Data Tables
    app.get(`${baseEndPoint}/data-tables`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/staging-setup/data-tables.json")
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

    // Get All Staging-Mapping
    app.get(`${baseEndPoint}`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/staging-setup/staging-table-mappings.json")
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

    // Update All Staging-Mapping
    app.put(`${baseEndPoint}`, (req, res) => {
    let responseObject = {
        data: [],
        message: "",
        error: null,
        status: "success"
    }
    let body = req.body;
    if(body) {
        responseObject.message = "Data Updated Successfully";
    }
    res.send(responseObject);
    });

};
  
exports.stagingSetup = stagingSetup;