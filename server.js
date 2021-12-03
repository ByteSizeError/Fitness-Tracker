const mongoose = require("mongoose");

const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbFitness", {
    useNewUrlParser: true,
});
