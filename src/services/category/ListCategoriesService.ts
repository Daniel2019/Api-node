import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

class ListCategoriesService{

    async execute(){

        const categoriesRepositories = getCustomRepository(CategoriesRepositories);

        const categories = categoriesRepositories.find();

        return categories;
    }
}

export { ListCategoriesService }