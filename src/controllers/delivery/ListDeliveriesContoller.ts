import { Request, Response } from "express";
import { ListDeliveriesService } from "../../services/delivery/ListDeliveriesService"

class ListDeliveriesContoller {

    async handle(request : Request, response : Response){
        const listDeliveriesService = new ListDeliveriesService();
        const deliveries = await listDeliveriesService.execute();
        return response.json(deliveries);
    }
}

export { ListDeliveriesContoller }