import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";

class ListDeliveriesService {

    async execute(){
        const deliveriesRepositories = getCustomRepository(DeliveriesRepositories);

        const deliveries = deliveriesRepositories.find({
            relations: [
                'idSales'
            ]
        });
        
        return deliveries;
    }
}

export { ListDeliveriesService }