import { Request, Response, response } from "express";
import { ListCategoriesService } from "../../services/category/ListCategoriesService";

class ListCategoriesController{

    async handle(request: Request, response : Response){
        
        const listCategoriesService = new ListCategoriesService();
        const categories = await listCategoriesService.execute();

        return response.json(categories);
    }
}

export { ListCategoriesController };