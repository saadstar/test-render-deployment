const constants = require("../constants");

const erorrHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
      case constants.VALIDATION_ERROR:
        res.json({
          title: "Validation",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case constants.NOT_FOUND:
        res.json({
          title: "Not Found",
          message: err.message,
          stackTrace: err.stack,
        });
      case constants.UNAUTHORIZED:
        res.json({
          title: "un authorized",
          message: err.message,
          stackTrace: err.stack,
        });
      case constants.FORBIDDEN:
        res.json({
          title: "forbidden",
          message: err.message,
          stackTrace: err.stack,
        });
      case constants.SERVER_ERORR:
        res.json({
          title: "server Erorr",
          message: err.message,
          stackTrace: err.stack,
        });
        default:
            console.log("no errors!")
        break;
    }
}
module.exports = erorrHandler;