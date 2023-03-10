const User = require('../models/user');


exports.postUserInfo = async (req, res, next) => {
    try{
        if(!req.body.name | !req.body.number | !req.body.email ){
            throw new Error('All fields are mandatory')
        }
        
        const name = req.body.Name;
        const phnnumber = req.body.Phn;
        const email = req.body.Email;
        console.log(name, phnnumber, email)
        const data = await User.create({
            name: name,
            phnnumber: phnnumber,
            email: email
        });
        res.status(201).json({newUserData: data});
    } 
    
    catch(err){
        res.status(500).json({error: err})
    }

}

exports.getUserInfo = async (req, res, next) => {
    try{
        const allUsers =   await User.findAll();
        res.status(201).json({allUsersfromDB: allUsers })
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.deleteUser = async (req, res, next) => {

    const delId = req.params.deleId;
    try{
        const delUser =   await User.destroy( { where: { id:delId } });
        res.status(201).json({delUserfromDB: delUser })
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

