import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IAuthenticateUserService {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateUserService) {

        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email,
        });

        if(!user){
            throw new Error("Email Incorreto!");
        }

        const passwordMatch = await compare(password, user?.password);

        if(!passwordMatch){
            throw new Error("Password Incorreto");
        }

        const token = sign(
            {
                email: user?.email,
            }, "12345", {
                subject: (user.admin?"Admin":"Others"),
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateUserService };