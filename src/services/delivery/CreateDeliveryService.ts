import { getCustomRepository } from "typeorm"
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories"
import { Sales } from "../../entities/Sales";

interface ICreateDeliveryRequest {
    idSales : Sales;
    data_entrega : string;
    obs: string;
}

class CreateDeliveryService {

    async execute({idSales, data_entrega, obs}:ICreateDeliveryRequest){

        if(!idSales){
            throw new Error("A venda não pode ser vazia!");
        }

        if(!data_entrega){
            throw new Error("A data de entrega não pode ser vazia!");
        }

        if(!obs){
            throw new Error("A observação não pode ser vazia!");
        }

        const deliveriesRepositories = getCustomRepository(DeliveriesRepositories);

        const delivery = deliveriesRepositories.create({
            idSales,
            data_entrega,
            obs
        });

        deliveriesRepositories.save(delivery);

        return delivery;
    }
}

export { CreateDeliveryService }