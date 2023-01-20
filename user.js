const { User ,validateUser} = require("./../Model/users");
const UserRole = require("../Model/userRole")

async function GetUserByemail(req, res) {
    let uid = req.params.id
    console.log(uid)
    let Isexist = await User.findOne({ email: uid })
    if (Isexist) {
        res.send(Isexist)
    }
    if (!Isexist) {
        res.send({ "err": 1, "msg": "user is not exist" })
    }
}
async function GetUserByid(req, res) {
    let uid = req.params.id
    console.log(uid)
    let Isexist = await User.findOne({_id: uid })
    if (Isexist) {
        res.send(Isexist)
    }
    if (!Isexist) {
        res.send({ "err": 1, "msg": "user is not exist" })
    }
}

  async function GetAlluser(req,res) {

    let user = await User.find()
        if (user) {
            res.send(user)
        }
        if (!user) {
            res.send({ "err": 1, "msg": "user is not exist" })
        }
}
async function GetUserRoleList(req,res) {
    let UserRoleList = await UserRole.find()
    if ( UserRoleList){ 
    res.send (UserRoleList)
  }
    else{
      res.send({ "err":1, "msg": " Data doesnot Exist"})
    }
  }

  async function CreateUserRole(req,res){
    const {name} = req.body
    const userrole = new UserRole({
       name : name,
      })
const role= await UserRole.findOne({name:name})
      if(role)
      {
        res.send({"err":1 , "msg": "User Role is Already Created"})
      }
      if(!role)
      {
        await userrole.save()

      res.send({"err":0 , "msg": "User Role is Created"})
      }
      
  }

  async function UpdateUserRole(req,res){
    let id = req.params.id
       let {status,name}= req.body;
    let UpdateUser= await UserRole.updateOne({_id:id},{$set:{'name':name,'status':status}})
    if (UpdateUser){
      res.send(UpdateUser)
    }
    else{
      res.send({ "err":1, "msg": " Data doesnot Exist"})
    }
  }
    module.exports = { GetUserByid, GetAlluser ,GetUserRoleList,CreateUserRole,UpdateUserRole,GetUserByemail}
    // module.exports = { GetUserByemail,GetUserByid, GetAlluser }