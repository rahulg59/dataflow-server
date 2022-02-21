const fs = require("fs");
const path = require("path");
const clusterSetup = (app, baseEndPoint) => {

    // Get All Industry Types
    app.get(`${baseEndPoint}/industry-types`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/cluster/industry-types.json")
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

    // Get All Columns
    app.get(`${baseEndPoint}/columns`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/cluster/cluster-columns.json")
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

    // Get Cluster List By Industry Id
    app.get(`${baseEndPoint}/clusters/:id`, (req, res) => {
    let id = req.params.id;
    if(!id) id = 0;
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, `../../res/system-settings/cluster/clusters-${id%2==0?1:2}.json`)
    );
    let responseObject = {
        data: [],
        message: "",
        error: null,
        status: "success"
    }
    let data = JSON.parse(rawdata);
    if(data) {
        responseObject.data = data;
    } else {
        responseObject.data = [];
        responseObject.message = "Data not found";
        responseObject.error = true;
        responseObject.status = "error"
    }
    res.send(responseObject);
    });

    // Add New Cluster
    app.post(`${baseEndPoint}/cluster/`, (req, res) => {
    let responseObject = {
        data: [],
        message: "",
        error: null,
        status: "success"
    }
    let body = req.body;
    if(body) {
        responseObject.message = "Data Added Successfully";
    }
    res.send(responseObject);
    });
};
  
exports.clusterSetup = clusterSetup;