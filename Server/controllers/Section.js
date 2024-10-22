const Section =require("../models/Section");
const Course = require("../models/Course");
const SubSection = require("../models/SubSection");

exports.createSection = async (req,res)=>{
    try{
         //fetch data
         const {sectionName,courseId} = req.body;
         //data validaton
         if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:"Missing Properties",
            })
         }
         //enter in db
         const newSection = await Section.create({
            sectionName,
         })
         //Update course with section object Id
         const updatedCourseDetails = await Course.findByIdAndUpdate(courseId,{
            $push:{
                courseContent:newSection._id,
            }
         },
         {new:true}).populate({
            path: "courseContent",
            populate: {
              path: "subSection",
            },
          })
          .exec()
           //HW use populate to replace section/subsection object id with real object
         //return response
         return res.status(200).json({
            success:true,
            message:"Section created successfully",
            updatedCourseDetails,
         })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Error while creating section"
        })
    }
};

//update Section

exports.updateSection = async(req,res)=>{
    try{
      //fetch data
      const {sectionName,sectionId} = req.body;
      //data validation
      if(!sectionName || !sectionId){
        return res.status(400).json({
            success:false,
            message:"Missing Properties",
        })
      }
      //update data
      const section = await Section.findByIdAndUpdate(sectionId,{
        sectionName,
      },{new:true});
      //return response
      return res.status(200).json({
        success:true,
        message:"Section created successfully",
        updatedCourseDetails,
     })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Error while updating section"
        })
    }
};


//delete Section
exports.deleteSection = async (req,res)=>{
    try{
       //get ID assuming we send ID in params
       const {sectionID} = req.params
       // findID and Update
       await Section.findByIdAndDelete(sectionID);
       //Todo: do we need to delete entry of this section from course
       //return response
       return res.status(400).json({
        success:false,
        message:'Section deleted successfully',
       })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Error while deleting section"
        })
    }
};
