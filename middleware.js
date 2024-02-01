const express = require("express");
const app = express();
const port = 3000;

function isOldEnoughMiddleware(req, res, next) {
    const age = parseInt(req.query.age);
    if (age >= 14) {
        next();
    } else {
        res.status(403).json({
            msg: "You are a kid"
        });
    }
}

let reqCount = 0;

function requestCount(req, res, next) {
    reqCount++;
    console.log(reqCount);
    next();
}

app.use(requestCount);  // Pass the middleware function without invoking it immediately

app.get('/ride-1', isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You have ride 1 successfully"
    });
});

app.get('/ride-2', isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You have ride 2 successfully"
    });
});

//error handling middleware
app.use((err,req,res,next)=>{
res.status(404).send({
    msg : "invalid request"
})
})

app.listen(port, () => {
    console.log(`Your app is running on port ${port}`);
});
