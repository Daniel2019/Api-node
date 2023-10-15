import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

class UpdateCategoryController{

    async handle(request : Request, response : Response){

        const updateCategoryService = new UpdateCategoryService();

        const id = request.params.id;
        const {name} = request.body;

        const category = await updateCategoryService.execute({
            id,
            name
        });

        return response.json(category);
    }

}

export { UpdateCategoryController };