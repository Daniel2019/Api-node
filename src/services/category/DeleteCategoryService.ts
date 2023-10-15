import { getCustomRepository } from "typeorm"
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface IDeleteCategoryRequest{
    id: string;
}

class DeleteCategoryService{

    async execute( { id } : IDeleteCategoryRequest ){

        if (!id) {
            throw new Error("O id não pode ser vazio!");
        }

        const categoriesRepositories = getCustomRepository(CategoriesRepositories);
        
        const categoryAlreadyExist = await categoriesRepositories.findOne({
            id,
        })

        if(!categoryAlreadyExist){
            throw new Error("Category not exists");
        }

        return await categoriesRepositories.delete(id);
    }

}

export { DeleteCategoryService }