const {ACTIVE,INACTIVE,BLOCK}= require("../constants")
const mangoose = require("mongoose");
const userF= new mangoose.Schema({
     module_name:{
                type:String,
                // required:true,
            },
            submodule:{
                type:Object
            },
            status:{
                type: String,
                enum:[ACTIVE, INACTIVE],
                default:INACTIVE
            },
            CreatedAt:{
                type:Date,
                default:Date.now
            }

});
module.exports = mangoose.model("fun",userF );