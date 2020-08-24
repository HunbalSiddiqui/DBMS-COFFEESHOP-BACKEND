const Menu = require("../Models/menu")

exports.updateMenu = (req,res) => {
    const menu  = new Menu(req.body)
    menu.save((err,updatedItem)=>{
        if(err)
        {
            return res.json("Unable to update menu")
        }
        return res.json(updatedItem)
    })
}

exports.viewMenu = (req,res) => {
    Menu.find().exec((err,menuItems)=>{
        var menuMap = [];
        if(err)
        {
            return res.json({error : "Unable to get menu"})
        }
        menuItems.forEach(item => {
            var {itemName,itemPrice} = item
            menuMap.push({
                itemName,itemPrice
            })
        });
        return res.json(menuMap)
    })
}