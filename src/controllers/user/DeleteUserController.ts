import { Request, Response } from "express";

import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {

  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const deleteUserService = new DeleteUserService();
    
    await deleteUserService.execute({id});

    return response.json("Registro excluido com sucesso!");
  }
}

export { DeleteUserController };