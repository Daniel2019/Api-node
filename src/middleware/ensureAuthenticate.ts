import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload { sub: String; }

export function ensureAuthenticate(request: Request, reponse: Response, next: NextFunction){

    const authToken = request.headers.authorization;

    if(!authToken) return reponse.status(401).end();

    const [, token] = authToken.split(" ");

    try{
        const { sub } = verify ( 
            token,
            "12345"
        ) as IPayload;

        return next();
    }catch (err){
        return reponse.status(401).end();
    }

}
