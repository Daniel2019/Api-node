import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController{

    async handle(request : Request, response : Response){

        const updateProductService = new UpdateProductService();

        const id = request.params.id;
        const { name, description, price, url, categoryName } = request.body;

        const product = await updateProductService.execute({
            id: id,
            name: name,
            description: description,
            price: price, 
            url: url, 
            categoryName: categoryName
        });

        return response.json(product);
    }

}

export { UpdateProductController };