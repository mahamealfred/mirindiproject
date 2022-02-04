import Models from "../database/models";
const { users } = Models;
class authController{

    static async signup(req,res){
        try {
            const {firstName, lastName,email,password}=req.body;
            const checkUser= await users.findOne({
                where:{email:email}
            });
            if(checkUser){
                res.status(400).json({
                    status:400,
                    message:"User with this email already exist"
                })
            }
            else{
                const createdData=await users.create({
                    firstName,
                    lastName,
                    email,
                    password
                }) ;
              return  res.status(200).json({
                    statust:200,
                    message:"Account created successfully",
                    data:createdData
                })
            }
            
        } catch (error) {
           res.status(500).json({
              status:500,
              message:"Server error :" +error.message
          })  
        }
    }
}

export default authController;