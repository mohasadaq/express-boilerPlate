const {authService} = require('../service');
const ResponseApi = require('../payload/ApiResponse');
const {handleAsync} = require('../util/util')
const login = handleAsync(async(req,res) => {
  let user = await authService.login(req.body.email,req.body.password)
 res.status(200).send(new ResponseApi(200,user))
    
})

module.exports= {
    login
}