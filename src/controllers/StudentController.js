

class StudentController{
static async getmirindi(req,res){
    console.log("mirindi said");
    res.status(200).send("mirindi saidi");
}

}

export default StudentController;