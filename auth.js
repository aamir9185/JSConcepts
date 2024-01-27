const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
    res.send("You are healthy");

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.KidneyID;

    if (username !== "Aamir" || password !== "pass") {
        res.status(400).json({ "msg": "Invalid username or password" });
    } else if (kidneyID !== "1" && kidneyID !== "2") {
        res.status(400).json({ "msg": "Wrong input for KidneyID" });
    } else {
        res.json({
            "msg": "Your kidney is healthy"
        });
    }
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});
