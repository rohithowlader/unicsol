//require mongoose module

import "dotenv/config";
//require chalk module to give colors to console text
import chalk from "chalk";
import mongoose from "mongoose";

//require database URL from properties file

var MongoDbConnectionString = process.env.MONGO_CONNECTION;

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

const MongoDbConnection = () => {
  mongoose.connect(MongoDbConnectionString);
  const db = mongoose.connection;

  db.on("connected", function () {
    console.log(connected("Mongoose connection is open"));
  });

  db.on("error", function (err) {
    console.log(error("Mongoose connection has occured " + err + " error"));
  });

  db.on("disconnected", function () {
    console.log(disconnected("Mongoose connection is disconnected"));
  });

  process.on("SIGINT", function () {
    db.close(function () {
      console.log(
        termination(
          "Mongoose default connection is disconnected due to application termination"
        )
      );
      process.exit(0);
    });
  });
};
export default MongoDbConnection;
