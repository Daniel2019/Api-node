import { Request, Response } from "express";
import { DeleteSalesService } from "../../services/sales/DeleteSalesService";

class DeleteSalesController{

    async handle(request : Request, response : Response){
        const id = request.params.id;
        const deleteSalesService = new DeleteSalesService();
        await deleteSalesService.execute({id});
        return response.json("Venda excluido com sucesso!");
    } 

}

export { DeleteSalesController }