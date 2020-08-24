const Complain = require("../Models/complain")

exports.issueComplain = (req,res) =>{
    const complain = new Complain(req.body)
    complain.save((err,issuedComplain)=>{
        if(err)
        {
            return res.json({error:"Unable to issue this complain."})
        }
        return res.json(issuedComplain)
    })
}

exports.viewAllComplain = (req,res) =>{
    Complain.find().exec((err,complains)=>{
        if(err)
        {
            return res.json({error : "Unable to find complains"})
        }
        return res.json(complains)
    })
}