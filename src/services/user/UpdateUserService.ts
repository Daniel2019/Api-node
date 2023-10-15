import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUpdateUserRequest{
    id: string;
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class UpdateUserService{

    async execute({id, name, email, admin, password}:IUpdateUserRequest){

        const usersRepositories = getCustomRepository(UsersRepositories);

        const userAlreadyExist = await usersRepositories.findOne({
            id,
        })

        if(!userAlreadyExist){
            throw new Error("User not exists");
        }

        const passwordHash = await hash(password, 8);
        userAlreadyExist.name = name;
        userAlreadyExist.email = email;
        userAlreadyExist.admin = admin;
        userAlreadyExist.password = passwordHash;
        userAlreadyExist.update_date = new Date();

        return await usersRepositories.update(id, userAlreadyExist);

    }
}

export { UpdateUserService }