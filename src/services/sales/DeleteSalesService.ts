import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface IDeleteSalesRequest{
    id: string;
}

class DeleteSalesService {

    async execute({id}:IDeleteSalesRequest){

        const salesRepositories = getCustomRepository(SalesRepositories);

        const salesAlreadyExists = await salesRepositories.findOne({
            id,
        })

        if(!salesAlreadyExists){
            throw new Error("Sales not exists");
        }

        return await salesRepositories.delete(id);
    }
}

export { DeleteSalesService }