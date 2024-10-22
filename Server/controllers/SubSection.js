const SubSection = require("../models/SubSection")
const Section = require("../models/SubSection");
const { uploadImageToCloudinary } = require("../utils/ImageUploader");
require("dotenv").config();

exports.createSubSection = async (req,res)=>{
     try{
       //get data
       const {sectionId,title,timeDuration,description} = req.body;
       //extract file/video
       const video = req.files.videoFile;
       //validation
       if(!sectionId || !title || !timeDuration || !description){
        return res.status(400).json({
            success:false,
            message:"All fields are required",
        })
       }
       //upload video to cloudinary
       const uploadDetails = await uploadImageToCloudinary(video,process.env.FOLDER_NAME)
       //create a subsection in db

       const subSectionDetails = await SubSection.create({
        title: title,
        timeDuration:timeDuration,
        description:description,
        videoUrl:uploadDetails.secure_url,
       })
       //update section with this subsection objectID
       const updatedSection = await Section.findByIdAndUpdate({_id:sectionId},{
        $push:{
            subSection:subSectionDetails._id,
        }
       },{new:true}).populate("subSection");
       //return response
       return res.status(200).json({
        success:true,
        message:"Subsection created successfully",
        updatedSection,
       })
     }catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Error while uploading subsection"
        })
     }
};

exports.updateSubSection = async (req, res) => {
    try {
      const { sectionId,subSectionId, title, description } = req.body
      const subSection = await SubSection.findById(subSectionId)
  
      if (!subSection) {
        return res.status(404).json({
          success: false,
          message: "SubSection not found",
        })
      }
  
      if (title !== undefined) {
        subSection.title = title
      }
  
      if (description !== undefined) {
        subSection.description = description
      }
      if (req.files && req.files.video !== undefined) {
        const video = req.files.video
        const uploadDetails = await uploadImageToCloudinary(
          video,
          process.env.FOLDER_NAME
        )
        subSection.videoUrl = uploadDetails.secure_url
        subSection.timeDuration = `${uploadDetails.duration}`
      }
  
      await subSection.save()
  
      const updatedSection = await Section.findById(sectionId).populate("subSection")


      return res.json({
        success: true,
        data:updatedSection,
        message: "Section updated successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while updating the section",
      })
    }
  }

exports.deleteSubSection = async (req,res) =>{
    try {
        
        const {subSectionId,sectionId } = req.body;
        await Section.findByIdAndUpdate(
            { _id: sectionId },
            {
              $pull: {
                subSection: subSectionId,
              },
            }
          )

        if(!subSectionId) {
            return res.status(400).json({
                success:false,
                message:'SubSection Id to be deleted is required',
            });
        }

        
        const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })
  
      if (!subSection) {
        return res
          .status(404)
          .json({ success: false, message: "SubSection not found" })
      }

      const updatedSection = await Section.findById(sectionId).populate("subSection")
  
      return res.json({
        success: true,
        data:updatedSection,
        message: "SubSection deleted successfully",
      })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to delete SubSection',
            error: error.message,
        })
    }
}