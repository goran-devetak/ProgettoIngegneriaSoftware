const mongoose = require("mongoose");

const uri = "mongodb+srv://gorandevetak2004:KPJGy5T59BC52rNW@progingegneria.xdw19.mongodb.net/?retryWrites=true&w=majority&appName=ProgIngegneria";

mongoose.connect(uri, {
})
.then(() => {
    console.log("Connected to MongoDB Atlas!");
})
.catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
});

module.exports = mongoose;  
