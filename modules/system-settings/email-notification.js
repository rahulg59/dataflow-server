const fs = require("fs");
const path = require("path");
const emailNotification = (app, baseEndPoint) => {

    // Get Email Notification Config
    app.get(`${baseEndPoint}`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/email-notification.json")
    );
    let responseObject = {
        data: {},
        message: "",
        error: null,
        status: "success"
    }
    let data = JSON.parse(rawdata);
    responseObject.data = data;
    res.send(responseObject);
    });

    // Test Connection
    app.get(`${baseEndPoint}/test-connection`, (req, res) => {
    let responseObject = {
        data: {},
        message: "Test Connection Passed",
        error: null,
        status: "success"
    }
    res.send(responseObject);
    });

    // Update Email Notification Config
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
  
exports.emailNotification = emailNotification;