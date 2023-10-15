import { getCustomRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IUpdateProductRequest{
    id: string,
    name: string; 
    description: string;
    price: number;
    url: string;
    categoryName: Category;
}

class UpdateProductService{

    async execute({id, name, description, price, url, categoryName}:IUpdateProductRequest){

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
        const productAlreadyExist = await productsRepositories.findOne({
            id
        })

        if(!productAlreadyExist){
            throw new Error("Product not exists");
        }

        productAlreadyExist.name = name;
        productAlreadyExist.description = description;
        productAlreadyExist.price = price;
        productAlreadyExist.url = url;
        productAlreadyExist.category = categoryName;
        productAlreadyExist.update_date = new Date();

        await productsRepositories.update(id, productAlreadyExist);

        return productAlreadyExist;

    }
}

export { UpdateProductService }