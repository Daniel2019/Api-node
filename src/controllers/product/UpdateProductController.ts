import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController{

    async handle(request : Request, response : Response){

        const updateProductService = new UpdateProductService();

        const id = request.params.id;
        const { name, description, price, url, categoryName } = request.body;

        const product = await updateProductService.execute({
            id,
            name,
            description,
            price, 
            url, 
            categoryName
        });

        return response.json(product);
    }

}

export { UpdateProductController };