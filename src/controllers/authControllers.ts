import { Request, Response } from "express";
import { User } from "../protocols/User.js";
import { newUser, findUserByEmail } from "../repository/userRepository.js";
import { newSession, deleteSession, findSession } from "../repository/sessionRepository.js";

export async function signUp (req: Request, res: Response) {
    const user = res.locals.user as User;

    try{
        await newUser(user);
        res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function signIn (req: Request, res: Response)  {
    const user = res.locals.user as User;

    try{
        const findUserInDb = await findUserByEmail(user.email);

        
        if(user.password !== findUserInDb.password){
            res.sendStatus(401);
            return 
        }
        
        const checkSessionInDb = await findSession(findUserInDb.id);

        if(!checkSessionInDb){
            await newSession(findUserInDb.id);
        }
        
        const obj = {
            userid: findUserInDb.id
        }
        
        res.send(obj);
    } catch (error) {
        return res.status(500).send(error.message)
    }

}