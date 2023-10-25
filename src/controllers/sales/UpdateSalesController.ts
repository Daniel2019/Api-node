import { Request, Response } from "express";
import { UpdateSalesService } from "../../services/sales/UpdateSalesService";

class UpdateSalesController{

    async handle(request : Request, response : Response){

        const updateSalesService = new UpdateSalesService();

        const id = request.params.id;
        const { productId, userId, total, desc, obs } = request.body;

        const sales = updateSalesService.execute({
            id,
            productId,
            userId,
            total,
            desc,
            obs
        });

        return response.json(sales);
    }

}

export { UpdateSalesController };