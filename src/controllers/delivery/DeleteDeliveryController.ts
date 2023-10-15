import { Request, Response } from "express";
import { DeleteDeliveryService } from "../../services/delivery/DeleteDeliveryService"

class DeleteDeliveryController {

    async handle(request : Request, response : Response){
        const id = request.params.id;
        const deleteDeliveryService = new DeleteDeliveryService();
        await deleteDeliveryService.execute({id});
        return response.json("Delivery excluido com sucesso!");
    }
}

export { DeleteDeliveryController }