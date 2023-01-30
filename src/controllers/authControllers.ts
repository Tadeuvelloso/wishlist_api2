import { Request, Response } from "express";
import { User } from "../protocols/User.js";
import { newUser, findUserByEmail } from "../repository/userRepository.js";
import { newSession, deleteSession, findSession } from "../repository/sessionRepository.js";

async function signUp (req: Request, res: Response) {
    const user = res.locals.user as User;

    try{
        await newUser(user);
        res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function signIn (req: Request, res: Response)  {
    const user = res.locals.user as User;

    try{
        const findUserInDb = await findUserByEmail(user.email);

        if(user.password !== findUserInDb.password){
            return res.sendStatus(401)
        }

        const checkSessionInDb = await findSession(findUserInDb.id);

        if(!checkSessionInDb){
            await newSession(findUserInDb.id);
        }

        res.send(findUserInDb.id);
    } catch (error) {
        return res.status(500).send(error.message)
    }

}