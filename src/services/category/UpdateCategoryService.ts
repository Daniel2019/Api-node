import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface IUpdateCategoryRequest{
    id: string;
    name: string;
}

class UpdateCategoryService{

    async execute({id, name}:IUpdateCategoryRequest){

        if (!id) {
            throw new Error("O id não pode ser vazio!");
        }

        if (!name) {
            throw new Error("O nome não pode ser vazio!");
        }

        const categoriesRepositories = getCustomRepository(CategoriesRepositories);

        const categoryAlreadyExist = await categoriesRepositories.findOne({
            id,
        })

        if(!categoryAlreadyExist){
            throw new Error("Category not exists");
        }

        categoryAlreadyExist.name = name;
        categoryAlreadyExist.update_date = new Date();

        return await categoriesRepositories.update(id, categoryAlreadyExist);

    }
}

export { UpdateCategoryService }