import { rateLimit } from 'express-rate-limit'

export const limiterPostForm =rateLimit({
    windowMs:60*60*1000,
    limit:3,
    standardHeaders:'draft-7'
}) 

export const limiterGetForm =rateLimit({
    windowMs:10*60*1000,
    limit:15,
    standardHeaders:'draft-7'
}) 

export const limiterLogin= rateLimit({
    windowMs:5*60*1000,
    limit:3,
    standardHeaders:'draft-7'
})

