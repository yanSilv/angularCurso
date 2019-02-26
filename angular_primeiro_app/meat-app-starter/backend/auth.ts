import {Request, Response} from 'express'
import {User, users } from './user'

export const handleAuthetication = (req: Request, resp: Response)=> {
    const user: User = req.body
    if (isValid(user)) {
        const dbUser: User = users[user.email]
        resp.json({name: dbUser.name, email: dbUser.email})
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