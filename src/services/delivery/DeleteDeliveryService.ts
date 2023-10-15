import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";

interface IDeleteDeliveryRequest {
    id : string
}

class DeleteDeliveryService {

    async execute({id} : IDeleteDeliveryRequest){

        if (!id) {
            throw new Error("O id não pode ser vazio!");
        }

        const deliveriesRepositories = getCustomRepository(DeliveriesRepositories);
        const deliveryAlreadyExist = await deliveriesRepositories.findOne({id});

        if(!deliveryAlreadyExist){
            throw new Error("Delivery not exists");
        }

        return await deliveriesRepositories.delete(id);
    }
}

export { DeleteDeliveryService }