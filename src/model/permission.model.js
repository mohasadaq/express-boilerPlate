const { getConnection } = require("../config/database");

//#region get permissions
const getPermissions = async () => {
  return await getConnection("select *from permissions"); // return all permission
};
//#endregion

//#region get role permissions
const getRolePermissions = async (roleName) => {
  return await getConnection(`select rl.roleid,rl.rolename,pr.permissionname from rolepermissions rp
  inner join roles rl on rl.roleid=rp.roleid
  inner join permissions pr on pr.permissionid= rp.permissionid
  where rolename=:roleName`,[roleName]); // return all role permission
};
//#endregion

module.exports = { getPermissions, getRolePermissions };
