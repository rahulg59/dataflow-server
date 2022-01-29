const fs = require("fs");
const path = require("path");
const dataConnections = (app, baseEndPoint) => {

    // Get All Source Data
    app.get(`${baseEndPoint}/source`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/data-connections/data-source.json")
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

    // Get Source Data By Id
    app.get(`${baseEndPoint}/source/:id`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/data-connections/data-source.json")
    );
    let responseObject = {
        data: [],
        message: "",
        error: null,
        status: "success"
    }
    let id = req.params.id;
    let data = JSON.parse(rawdata);
    let dataObj = data.find(item => item["connectionId"] == id);
    if(dataObj) {
        responseObject.data = dataObj;
    } else {
        responseObject.data = {};
        responseObject.message = "Data not found";
        responseObject.error = true;
        responseObject.status = "error"
    }
    res.send(responseObject);
    });

    // Add Source Data
    app.post(`${baseEndPoint}/source/`, (req, res) => {
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

    // Update Source Data
    app.put(`${baseEndPoint}/source/:id`, (req, res) => {
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

    // Delete Source Data
    app.delete(`${baseEndPoint}/source/:id`, (req, res) => {
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

    // Get All Source Types
    app.get(`${baseEndPoint}/source-type`, (req, res) => {
        let rawdata = fs.readFileSync(
            path.resolve(__dirname, "../../res/system-settings/data-connections/data-source-type.json")
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

    // Get All Target Data
    app.get(`${baseEndPoint}/target`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/data-connections/target-data.json")
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

    // Get Target Data By Id
    app.get(`${baseEndPoint}/target/:id`, (req, res) => {
        let rawdata = fs.readFileSync(
            path.resolve(__dirname, "../../res/system-settings/data-connections/target-data.json")
        );
        let responseObject = {
            data: [],
            message: "",
            error: null,
            status: "success"
        }
        let id = req.params.id;
        let data = JSON.parse(rawdata);
        let dataObj = data.find(item => item["connectionId"] == id);
        if(dataObj) {
            responseObject.data = dataObj;
        } else {
            responseObject.data = {};
            responseObject.message = "Data not found";
            responseObject.error = true;
            responseObject.status = "error"
        }
        res.send(responseObject);
        });
    
        // Add target Data
        app.post(`${baseEndPoint}/target/`, (req, res) => {
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
    
        // Update target Data
        app.put(`${baseEndPoint}/target/:id`, (req, res) => {
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
    
        // Delete target Data
        app.delete(`${baseEndPoint}/target/:id`, (req, res) => {
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
  
exports.dataConnections = dataConnections;