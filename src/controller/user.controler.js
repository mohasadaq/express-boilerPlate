const status = require("http-status"); // import http status
const { userService } = require("../service"); // import user service
const ApiError = require("../payload/ApiError"); // import api error
const ApiResponse = require("../payload/ApiResponse"); // import api error
const logger = require("../config/logger");
const { handleAsync } = require("../util/util");
let error, response;

//#region get users
// users List conroller
const getUsers = handleAsync(async (req, res, next) => {

  let users = await userService.getUsers();
  let successmessage = res.__('message');
  response = new ApiResponse(status.OK, successmessage, users); // prepare response

  logger.info(response); //  log as info
  res.status(status.OK).send(response)
});

//#endregion

//#region get user by id
const getUserById = handleAsync(async (req, res) => {
  let user = await userService.getUser(req.params.userId);
  if (user.length) {
    response = new ApiResponse(
      res.statusCode,
      "successfuly get one user",
      user
    ); // prepare response
  } else {
    throw new ApiError(status.NOT_ACCEPTABLE, "Id not exists ..");
  }
  logger.info(response); // log response
  res.status(status.OK).send(response) // send the data to as response
});
//#endregion

//#region create user
const createUser = handleAsync(async (req, res) => {
  let user = await userService.createUser(req.body);
  let message = res.__('registerSuccess')
  if (user) {
    response = new ApiResponse(status.OK, message); // prepare response
  }
  else{
    message = res.__('registerError')
    throw new ApiError(status.NOT_ACCEPTABLE,message)
  }
  logger.info(response); // log response as info
  res.status(status.OK).send(response)
});
//#endregion

//#region update user
const editUser = handleAsync(async (req, res) => {
  let user = await userService.updateUser(req.body);

  if (user) {
    response = new ApiResponse(res.statusCode, "successfuly updated the user"); // prepare response
  } else {
    throw new ApiError(status.NOT_ACCEPTABLE, "Id not exists ..");
  }
  logger.info(response); // log as info
  res.send(response); // resturn the response
});
//#endregion

//#region delete user ...
const deleteUser = handleAsync(async (req, res) => {
  let user = await userService.deleteUser(req.params.userId);
  if (user) {
    response = new ApiResponse(res.statusCode, "successfuly deleted the user");
  } else {
    throw new ApiError(status.NOT_ACCEPTABLE, "Id not exists ..");
  }
  logger.info(response);
  res.send(response);
});

//#endregion

module.exports = { getUsers, createUser, getUserById, editUser, deleteUser };
