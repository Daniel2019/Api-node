import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
import { Category } from "../../entities/Category";

interface ICreateProductRequest {
    name: string; 
    description: string;
    price: number;
    url: string;
    categoryName: Category;
}

class CreateProductService{

    async execute({ name, description, price, url, categoryName }:ICreateProductRequest){

        let errorMessage = "";

        if(!name) {
            errorMessage += ("O nome não pode ser vazio!");
        }

        if(!description) {
            errorMessage += ("A descrição não pode ser vazia!");
        }

        if(!price) {
            errorMessage += ("O preço não pode ser vazio!");
        }

        if(!url) {
            errorMessage += ("A URL não pode ser vazia!");
        }

        if(!categoryName) {
            errorMessage += ("A categoria não pode ser vazia!");
        }

        if(errorMessage != ""){
            throw new Error(errorMessage);
        }

        const productsRepositories = getCustomRepository(ProductsRepositories);
        const product = productsRepositories.create({
            name,
            description,
            price,
            url
        })
        product.category = categoryName;

        await productsRepositories.save(product);

        return product;
    }

}

export { CreateProductService };