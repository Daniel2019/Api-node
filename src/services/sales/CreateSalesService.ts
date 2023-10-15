import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { User } from "../../entities/User";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface ICreateSalesRequest {
    productId: Product[]; 
    userId: User;
    total: number;
    desc: string;
    obs: string
}

class CreateSalesService{

    async execute({ productId, userId, total, desc, obs }:ICreateSalesRequest){

        let errorMessage = "";

        if(!productId) {
            errorMessage += ("O ID do produto não pode ser vazio!");
        }

        if(!userId) {
            errorMessage += ("O ID do usuário não pode ser vazio!");
        }

        if(!total) {
            errorMessage += ("O total não pode ser vazio!");
        }

        if(!desc) {
            errorMessage += ("A descrição não pode ser vazia!");
        }

        if(!obs) {
            errorMessage += ("A observação não pode ser vazia!");
        }

        if(errorMessage != ""){
            throw new Error(errorMessage);
        }

        const salesRepositories = getCustomRepository(SalesRepositories);
        const sales = salesRepositories.create({
            productId,
            userId,
            total,
            desc,
            obs
        });

        await salesRepositories.save(sales);

        return sales;
    }

}

export { CreateSalesService };