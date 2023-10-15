import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {

  async handle(request: Request, response: Response) {

    const id = request.params.id;
    const {name, email, admin, password } = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id, 
      name, 
      email, 
      admin, 
      password
    });

    return response.json(user);
  }
}

export { UpdateUserController };