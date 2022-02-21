const fs = require("fs");
const path = require("path");
const unwantedCharacters = (app, baseEndPoint) => {

    // Get Unwanted Characters
    app.get(`${baseEndPoint}`, (req, res) => {
    let rawdata = fs.readFileSync(
        path.resolve(__dirname, "../../res/system-settings/unwanted-characters.json")
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
  
exports.unwantedCharacters = unwantedCharacters;