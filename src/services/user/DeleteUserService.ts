import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IDeleteUserRequest{
    id: string;
}

class DeleteUserService{

    async execute({id}:IDeleteUserRequest){

        const usersRepositories = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await usersRepositories.findOne({
            id,
        })

        if(!userAlreadyExists){
            throw new Error("User not exists");
        }

        return await usersRepositories.delete(id);

    }
}

export { DeleteUserService }