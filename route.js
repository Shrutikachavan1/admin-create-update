const express = require('express');
const router = express.Router();
const {signUp,signIn,postotp,resend,Resetmail,ChangePass}=require('./Controller/auth');
const { GetUserByid, GetAlluser, GetUserByemail,GetUserRoleList,CreateUserRole,UpdateUserRole } = require('./Controller/user');


router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/otp", postotp); 
router.post("/resendotp", resend)
router.post("/resetmail",Resetmail)
router.get("/getuserByemail/:id", GetUserByemail)
router.get("/getuserByid/:id", GetUserByid)
router.get("/getalluser", GetAlluser)
router.post("/changepass",ChangePass)
router.get("/getuserrolelist",GetUserRoleList)
router.post("/createuserrole",CreateUserRole)
router.put("/updateuserrole/:id",UpdateUserRole)
module.exports = router;