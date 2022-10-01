const mongoose=require('mongoose');


const TeacherSchema=mongoose.Schema({
    employee_id:String,
    first_name:String,
    last_name:String,
    university:String,
    email:String,
    password:String
   
});

module.exports=mongoose.model('teachersignups',TeacherSchema);