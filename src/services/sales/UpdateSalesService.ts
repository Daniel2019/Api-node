import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { User } from "../../entities/User";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface IUpdateSalesRequest {
    id: string;
    productId: Product[]; 
    userId: User;
    total: number;
    desc: string;
    obs: string;
}

class UpdateSalesService{

    async execute({id, productId, userId, total, desc, obs}:IUpdateSalesRequest){
        
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

        const salesAlreadyExist = await salesRepositories.findOne({
            id,
        })

        if(!salesAlreadyExist){
            throw new Error("Sales not exists");
        }

        salesAlreadyExist.productId = productId;
        salesAlreadyExist.userId = userId;
        salesAlreadyExist.total = total;
        salesAlreadyExist.desc = desc;
        salesAlreadyExist.obs = obs;
        salesAlreadyExist.update_date = new Date();

        return await salesRepositories.save(salesAlreadyExist);

    }
}

export { UpdateSalesService }