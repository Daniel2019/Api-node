import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IDeleteProductRequest{
    id: string;
}

class DeleteProductService {
    async execute({id}:IDeleteProductRequest){

        const productsRepositories = getCustomRepository(ProductsRepositories);
        
        const productAlreadyExist = productsRepositories.findOne({id});
        
        if(!productAlreadyExist){
            throw new Error("Product not exists");
        }

        return await productsRepositories.delete(id);
    }
}

export { DeleteProductService }