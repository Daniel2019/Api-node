import { Request, Response } from "express";
import { CreateDeliveryService } from "../../services/delivery/CreateDeliveryService"

class CreateDeliveryController {

    async handle(request : Request, response : Response){

        const { idSales, data_entrega, obs } = request.body;
        
        const createDeliveryService = new CreateDeliveryService();
        const delivery = await createDeliveryService.execute({
            idSales,
            data_entrega,
            obs
        });
        
        return response.json(delivery);
    }
}

export { CreateDeliveryController }