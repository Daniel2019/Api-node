import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController{

    async handle(request : Request, response : Response){

        const id = request.params.id;
        
        const deleteCategoryService = new DeleteCategoryService();
    
        await deleteCategoryService.execute({id});

        return response.json("Categoria excluida com sucesso!");
    } 

}

export { DeleteCategoryController }