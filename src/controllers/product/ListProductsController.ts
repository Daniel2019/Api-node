import { Request, Response, response } from "express";
import { ListProductsService } from "../../services/product/ListProductsService";

class ListProductsController{

    async handle(request: Request, response : Response){

        const listCategoriesService = new ListProductsService();
        const products = await listCategoriesService.execute();

        return response.json(products);
    }
}

export { ListProductsController };