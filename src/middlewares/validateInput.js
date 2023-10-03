import validator from 'validator';
// escape(input) 	replace <, >, &, ', " and / with HTML entities.

export const validateForm = async (req, res, next) => {
    const emailOK = validator.isEmail(req.body.email)
    if (!emailOK) return res.status(400).json({ message: 'E-mail is invalid' })
    const safeObject = {
        email: req.body.email,
        name: validator.escape(req.body.name),
        subject: validator.escape(req.body.subject),
        message: validator.escape(req.body.message)
    }
    req.body = safeObject
    next()
}

export const validateLogin = async (req, res, next) => {
    const emailOK = validator.isEmail(req.body.email)   
    const passwordOK = validator.isStrongPassword(req.body.password)
    if(!emailOK || !passwordOK) return res.status(400).json({ message: 'Credentials are invalid' })
    const safeObject = {
        email: req.body.email,
        password: validator.escape(req.body.password)
    }
    req.body = safeObject
    next()
}

export const validateSecurePassword = async (req, res, next)=>{
    if(req.body.password){
        const passwordOK = validator.isStrongPassword(req.body.password)
        if(passwordOK) next()
        else return res.status(404).json({message:'password format invalid'})
    }
    else next()
    
}
