import { Request, Response } from "express";
import { UpdateDeliveryService } from "../../services/delivery/UpdateDeliveryService"

class UpdateDeliveryContoller {

    async handle(request : Request, response : Response){
        const id = request.params.id;
        const { idSales, data_entrega, obs } = request.body;

        const updateDeliveryService = new UpdateDeliveryService();
        const delivery = await updateDeliveryService.execute({
            id,
            idSales,
            data_entrega,
            obs
        });

        return response.json(delivery);
    }
}

export { UpdateDeliveryContoller }