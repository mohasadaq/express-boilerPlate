const { userModel } = require("../model/");
const ApiError = require("../payload/ApiError");
const jwt = require("jsonwebtoken");

const login = async (email, password) => {
  let user = await userModel.isEmailAndPasswordExist(email, password);
  if (!user.length) {
    throw new ApiError(401, "email or password not exist");
  }
  let token = jwt.sign(
    {userId: user[0].userid, role: user[0].rolename},
    process.env.JWT_SECRET_KEY
  );
  return { token };
};

module.exports = { login };
