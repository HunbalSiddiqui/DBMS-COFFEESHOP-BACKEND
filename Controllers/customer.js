const Customer = require('../Models/customer');



exports.newCustomer = (req,res) => {
    const customer = new Customer(req.body)
    customer.save((err,addedCustomer)=>{
        if(err)
        {
            return res.status(400).json({
                err : "NOT ABLE TO ADD NEW CUSTOMER"
            })
        }
        console.log(addedCustomer)
        return res.json(
            addedCustomer
        )
    })
}