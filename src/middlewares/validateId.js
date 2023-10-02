export const checkId = async (req, res, next)=>{      
    if(req.user.id !== req.params.id) return res.status(401).json({ message: "no authorization" })
    next()
}
