import { Request, Response, NextFunction } from "express";
import { userSchema } from "../schemas/userSchemas.js";
import { User } from "../protocols/User.js";


export function checkUserObj (req: Request, res: Response, next: NextFunction) {
    const user = req.body as User;


    if (!user) {
        return res.sendStatus(400);
    }

    const { error } = userSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}