//  const express=require('express')
//  const router=express.Router()
//  const  createStudent  = require('../controller/StudentController')


//  router.get('/',(req,res)=>{
//      res.json({message:'all student'})
//  })

//  router.get('/:StudentId',(req,res)=>{
//      res.json({message:'single student'})
//      })
//router.post('/creatStudent',createStudent)
//router.post("/creatStudent",createStudent.createMyStudent)


    //     router.put('/:StudentId',(req,res)=>{
    //          res.json({message:' student Update'})
    //          })

    //          router.delete('/:StudentId',(req,res)=>{
    //              res.json({message:' student Delete'})
    //              })

    //  module.exports=router



// const express=require('express')
// const router=express.Router()

// //// import controller                                                                                                                   
// const  StudentController  = require('../controller/StudentController')

// //import model 
// const StudentModel  = require("../model/StudentModel");

// router.get( '/', (req, res)=> {
//     res.send('Welcome Students')
//  });
// //تسجيل حساب طالبة جديد
// router.post("/add_student", StudentController.add_student);
// //router.post("/login", StudentController.studentlogin);
// //عرض قائمة الطالبات
// router.get( '/get-all-students', StudentController.get_student );
 
// router.get( '/getStudentByFirstName', StudentController.get_student_by_first_name );

// router.put('/update-student', StudentController.update_student_by_id);

// router.delete('/delete_student', StudentController.delete_student);

// module.exports=router

const express = require('express')
const Student = require('../controller/StudentController')
const router=express.Router()

router.get('/', Student.findAll);
router.get('/:id', Student.findOne);
router.post('/', Student.create);
router.patch('/:id', Student.update);
router.delete('/:id', Student.destroy);

module.exports = router