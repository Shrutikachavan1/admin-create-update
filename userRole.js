const mangoose = require('mongoose');
const {ACTIVE,INACTIVE,BLOCKED}=require('../constants')
const UserRole = (
    new mangoose.Schema({
        name: {
            type: String,
            required:true
        },
        status: {
            type:Boolean,
            required:true,
            default:true
            
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
         updatedAt: {
             type: Date,
            default: Date.now,
        },
        menu:{
            type:Object,

        },
    })
)
module.exports = mangoose.model("userrole",UserRole);
// module.exports={UserRole}

