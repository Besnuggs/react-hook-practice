user={
    name: 'Brady'
}

module.exports={
    getUser: (req,res) => {
        

        res.send(user.name)
    }
}