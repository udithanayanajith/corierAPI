const mongooseDB = require("mongoose");
const dbMongoConfig = (async) => {
  mongooseDB
    .connect(
      "mongodb+srv://tharukagihan97:GihanTharuka@cluster0.itli3tg.mongodb.net/corier?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Atlas DataBase is Connected");
    })
    .catch((err) => {
      console.log(" Atlas DataBase is Not connected");
      console.log(err);
    });
};
module.exports = dbMongoConfig;
