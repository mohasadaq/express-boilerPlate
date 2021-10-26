const {authService} = require('../service');
const ResponseApi = require('../payload/apiResponse');
const login = (req,res) => {
  
 res.status(200).send(new ResponseApi(200,authService.login(req.body.email,req.body.password)))
    
}

module.exports= {
    login
}