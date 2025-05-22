import superbase from '../config/dbconnect.js'

const insert_details=async(req,res)=>{
    const {title,description,}=req.body
    const {error } = await superbase
      .from('todo_details')
      .insert({  title,description })
      

      if(error){
        console.log(error.message)
       return  res.status(500).json({"error":"sqlerror"})
      }
      return res.status(200).json({"success":true})
}
 export default insert_details