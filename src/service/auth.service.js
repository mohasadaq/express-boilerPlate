const {userModel} = require('../model/');
const ApiError = require('../payload/apiError');

const jwt = require('jsonwebtoken');
const login = (email,password) =>{

    let user = userModel.isEmailAndPasswordExist(email,password)

    if (!user.length) {
        throw new ApiError(401,'email or password not exist')
    }

    let token = jwt.sign({user},process.env.JWT_SECRET_KEY)
    return {token}
}

module.exports={
    login
}