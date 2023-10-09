import {getIp} from '../controller/IpController.js'

export const readIp =(req, res, next)=>{
    const userIp= getIp(req)
    console.log(userIp)
    next()
}