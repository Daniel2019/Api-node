import { Request, Response } from "express";
import { CreateSalesService } from "../../services/sales/CreateSalesService";

class CreateSalesController {

  async handle(request: Request, response: Response) {
    const { productId, userId, total, desc, obs } = request.body;

    const createSalesService = new CreateSalesService();
   
    const sales = await createSalesService.execute({
      productId,
      userId,
      total,
      desc,
      obs
    });

    return response.json(sales);
  }
}

export { CreateSalesController };