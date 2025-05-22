import superbase from '../config/dbconnect.js'

const del_details=async(req,res)=>{
    const id=req.params.id

    const {error} = await superbase
    .from('todo_details')
    .delete()
    .eq('id', id)

    if(error){
        console.log(error.message)
        return  res.status(500).json({"error":"sqlerror"})
    }
    return res.status(200).json({"success":true})
}

export default del_details