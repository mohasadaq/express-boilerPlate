const { permisionModel } = require("../model"); // import permission model

const getPermissions = () => permisionModel.getPermissions(); // get permision list from the model
const getRolePermissions = (userRole) => permisionModel.getRolePermissions(userRole); // get permision list from the model

module.exports = { getPermissions,getRolePermissions };
