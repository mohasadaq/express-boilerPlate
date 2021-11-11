const { permissionService } = require("../service");
const ResponseApi = require("../payload/ApiResponse");
const { handleAsync } = require("../util/util");

/**
 * @description
 * permission function
 */
const permissions = handleAsync(async (req, res) => {
  let permissionList = await permissionService.getPermissions() 
  res.status(200).send(new ResponseApi(200, permissionList));
});

module.exports = { permissions };
