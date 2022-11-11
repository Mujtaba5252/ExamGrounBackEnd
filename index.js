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

app.post('/SignIn',async(req,resp)=>{
   let teacher=await teacherSchema.findOne(req.body).select("-password");
   if(req.body.email && req.body.password)
   {
    
        if(teacher)
        {
        resp.send(teacher);
        }else{
        resp.send({result:"Record not Found"});
        }
   }
   else{
    resp.send({result:"Record not Found"});
   }
  

});

app.post('/StudentSignIn',async(req,resp)=>{
    let student=await StudentSchema.findOne(req.body).select("-password");
    if(req.body.email && req.body.password)
    {
         if(student)
         {
         resp.send(student);
         }else{
         resp.send({result:"Record not Found"});
         }
    }
    else{
     resp.send({result:"Record not Found"});
    }
   
 
 });


app.listen(5000);