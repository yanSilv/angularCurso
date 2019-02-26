import {Request, Response} from 'express'
import {User, users } from './user'

import * as jwt from 'jsonwebtoken'
import {apiConfig} from './api-config'

export const handleAuthetication = (req: Request, resp: Response)=> {
    const user: User = req.body
    if (isValid(user)) {
        const dbUser = users[user.email]
        const token = jwt.sign({sub: dbUser.email, iss: 'meat_api'}, apiConfig.secret)
        resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
    } else {
        resp.status(403).json({message: 'Dados Inv�lidos'})
    }
}

function isValid(user: User): boolean {
    if (!user) {
        return false
    }

    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user);
}