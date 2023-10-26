import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";
import { Sales } from "../../entities/Sales";

interface IUpdateDeliveryRequest {
    id : string;
    idSales : Sales;
    data_entrega : string;
    obs: string;
}

class UpdateDeliveryService {

    async execute({id, idSales, data_entrega, obs} : IUpdateDeliveryRequest){

        if(!id){
            throw new Error("O id não pode ser vazio!");
        }

        if(!data_entrega){
            throw new Error("A data de entrega não pode ser vazia!");
        }

        if(!obs){
            throw new Error("A observação não pode ser vazia!");
        }

        if(!idSales){
            throw new Error("A venda não pode ser vazia!");
        }

        const deliveriesRepositories = getCustomRepository(DeliveriesRepositories);

        const deliveryAlreadyExist = await deliveriesRepositories.findOne(id);

        if(!deliveryAlreadyExist){
            throw new Error("Delivery not exists");
        }

        deliveryAlreadyExist.idSales = idSales,
        deliveryAlreadyExist.data_entrega = data_entrega;
        deliveryAlreadyExist.obs = obs;
        deliveryAlreadyExist.update_date = new Date();

        return await deliveriesRepositories.update(id, deliveryAlreadyExist);
    }
}

export { UpdateDeliveryService }