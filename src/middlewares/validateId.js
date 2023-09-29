export const checkId = async (req, res, next)=>{  
    console.log(req.user) 
    console.log(req.params.id)
    if(req.user.id !== req.params.id) return res.status(401).json({ message: "no authorization" })
    next()
}
