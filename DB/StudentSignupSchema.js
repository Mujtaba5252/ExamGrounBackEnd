const mongoose=require('mongoose');


const StudentSchema=mongoose.Schema({
    system_id:String,
    first_name:String,
    last_name:String,
    university:String,
    email:String,
    password:String
   
});

module.exports=mongoose.model('studentsignups',StudentSchema);