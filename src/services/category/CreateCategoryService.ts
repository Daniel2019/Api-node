import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface ICreateCategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: ICreateCategoryRequest) {
    
    if (!name) {
      throw new Error("O nome não pode ser vazio!");
    }

    const categoriesRepositories = getCustomRepository(CategoriesRepositories);
    const category = categoriesRepositories.create({name});
   
    await categoriesRepositories.save(category);
    
    return category;
  }
}

export { CreateCategoryService };
