import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


interface ICreateUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService{

    async execute({name, email, admin = false, password} :ICreateUserRequest){

        if(!email){
            throw new Error("Email incorreto!");
        }

        const usersRepositories = getCustomRepository(UsersRepositories);
        const userAlreadyExists = await usersRepositories.findOne({ email, });

        if(userAlreadyExists){
            throw new Error("Email já existente!");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepositories.create({
            name,
            email, 
            admin,
            password: passwordHash 
        })

        await usersRepositories.save(user);
        
        return user;
    }

}

export { CreateUserService };