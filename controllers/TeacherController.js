import Teacher from "../models/TeacherModel.js";

const createTeacher =async (req,res) => {
    const { branch, name } = req.body;

     try {
        const teacherCreate= await Teacher.create({
            branch,
            name,
          });
        res.status(201).json({
            succes:true,
            message:"Öğretmen Oluşturuldu",
            teacherCreate
        })
        
     } catch (error) {
        res.status(500).json({
            succes:false,
            message:error.message
        })
     }
}

const getAllTeacher=async (req,res) => {
    try {
        const getAll=await Teacher.findAll({})
        res.status(200).json({
            succes:true,
            message:"Öğretmenler Getirildi",
            getAll
        })
    } catch (error) {
        res.status(500).json({
            succes:false,
            error:error.message


        })
    }
}

const updateTeacher =async (req,res)=> {
    const teacherId=req.params.id
    const teacherBody=req.body

    try {
        const updated=await Teacher.update(teacherBody,{
            where:{id:teacherId}
        }
           
        )
        if(updated[0]===1) {
            res.status(200).json({
                succes:true,
                message:"Öğretmen Güncellendi",
                
            })
        }
    } catch (error) {
        res.status(500).json({
            succes:false,
            error:error.message
        })
    }
}

const deleteTeacher = async (req,res) => {

const teacherId=req.params.id

try {
    const deletedTeacher=await Teacher.findByPk(teacherId)
    deletedTeacher.destroy()
    res.status(200).json({
        succes:true,
        message:"Öğretmen Silindi"
    })
} catch (error) {
    res.status(500).json({
        succes:false,
        error:error.message
    })
}

}

export{createTeacher,getAllTeacher,updateTeacher,deleteTeacher}