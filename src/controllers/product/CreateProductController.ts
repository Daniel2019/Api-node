import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {

  async handle(request: Request, response: Response) {
    const { name, description, price, url, categoryName } = request.body;

    const createProductService = new CreateProductService();
   
    const product = await createProductService.execute({
      name, 
      description, 
      price, 
      url, 
      categoryName
    });

    return response.json(product);
  }
}

export { CreateProductController };