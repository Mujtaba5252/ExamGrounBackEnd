const express=require('express');
require('./DB/connection.js');
const cors=require('cors');
const teacherSchema=require('./DB/TeacherSignupSchema.js');
const StudentSchema=require('./DB/StudentSignupSchema.js');

const app=express();
app.use(express.json());
app.use(cors());
app.post('/teachersignup',async (req,resp)=>{

    let teacher=new teacherSchema(req.body);
    let result=await teacher.save();
    resp.send(result);

});
app.post('/studentsignup',async (req,resp)=>{

    let student=new StudentSchema(req.body);
    let result=await student.save();
    resp.send(result);


});


app.listen(5000);