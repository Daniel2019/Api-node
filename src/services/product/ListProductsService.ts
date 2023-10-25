import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
import { Category } from "../../entities/Category";

class ListProductsService {
    async execute(){
        const productsRepositories = getCustomRepository(ProductsRepositories);

        const products = productsRepositories.find({
            relations: [
                'category'
            ]
        });

        return products;
    }
}

export { ListProductsService }