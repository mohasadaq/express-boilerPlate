const status = require("http-status");
const ApiError = require("../payload/ApiError");
const jwt = require("jsonwebtoken");
const logger = require("../config/logger");
const { permissionService } = require("../service");
const { handleAsync } = require("../util/util");
const NodeCache = require("node-cache");
const myCache = new NodeCache();

const authrization = (apiName) => (req, res, next) => {
  try {
    let data = myCache.get("decodedToken");
    let userRole = data.payload.role;
    permissionService
      .getRolePermissions(userRole)
      .then((res) => {
        if (res.filter((p) => p.permissionname == apiName).length > 0) {
          return next();
        }
        next(new ApiError(401, "you can not access this endpoint"));
      })
      .catch((err) => Promise.reject(err));
  } catch (err) {
    console.log(err);
    throw new ApiError(401, "you can not access this endpoint");
  }
};

/**
 * @description
 * authentication middleware
 */
const auth = (req, res, next) => {
  let token = req.header("authorization");
  if (!token) {
    throw new ApiError(401, "your authentication is now expaired");
  }

  try {
    token = token.split(" ")[1];
    let response = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (response) {
      var decoded = jwt.decode(token, { complete: true });
      myCache.set("decodedToken", decoded);
      next();
    }
  } catch (err) {
    // console.log(err);
    throw new ApiError(401, "your authentication is Not Valid");
  }
};

module.exports = { auth, authrization };
