import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

class ListProductsService {
    async execute(){
        const productsRepositories = getCustomRepository(ProductsRepositories);

        const products = productsRepositories.find();

        return products;
    }
}

export { ListProductsService }