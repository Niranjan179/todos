import superbase from '../config/dbconnect.js'


const get_details=async (req,res)=>{
    const { data, error } = await superbase
    .from('todo_details')
    .select()

  if(error){
    console.log(error.message)
    return res.status(500).json({"status":"error"});
  }
  return res.status(200).json({"status":"success",data})
}

export default get_details