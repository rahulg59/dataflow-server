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

    // Add New Cluster
    app.post(`${baseEndPoint}`, (req, res) => {
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

    // Add New Cluster POST BODY
    app.get(`${baseEndPoint}/add-new-cluster`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/cluster/add-new-cluster.json")
    );
    let data = JSON.parse(rawdata);
    res.send(data);
    });

    // Get Cluster List By Industry Id
    app.get(`${baseEndPoint}/:id`, (req, res) => {
        let id = req.params.id;
        let rawdata;
        if(id && id == "1" || id == "2")
        rawdata = fs.readFileSync(
            path.resolve(__dirname, `../../res/system-settings/cluster/clusters-${id}.json`)
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
};
  
exports.clusterSetup = clusterSetup;