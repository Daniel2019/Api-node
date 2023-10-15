import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductController{

    async handle(request : Request, response : Response){
        const id = request.params.id;

        const deleteProductService = new DeleteProductService();
    
        await deleteProductService.execute({id});

        return response.json("Produto excluido com sucesso!");
    } 

}

export { DeleteProductController }