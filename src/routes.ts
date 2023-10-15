import { Router } from "express";

// ============================== IMPORTS =================================== //

// USERS
import { CreateUserController } from "./controllers/user/CreateUserController";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";

// CATEGORY
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";

// PRODUCT
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductsController } from "./controllers/product/ListProductsController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";

// SALES
import { CreateSalesController } from "./controllers/sales/CreateSalesController";
import { ListSalesController } from "./controllers/sales/ListSalesController";
import { UpdateSalesController } from "./controllers/sales/UpdateSalesController";
import { DeleteSalesController } from "./controllers/sales/DeleteSalesController";

// DELIVERY
import { CreateDeliveryController } from "./controllers/delivery/CreateDeliveryController";
import { ListDeliveriesContoller } from "./controllers/delivery/ListDeliveriesContoller";
import { UpdateDeliveryContoller } from "./controllers/delivery/UpdateDeliveryContoller";
import { DeleteDeliveryController } from "./controllers/delivery/DeleteDeliveryController";

// LOGIN
import { AuthenticateUserController } from "./controllers/user/AuthenticateUserController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";

// ==================== CREATE CONTROLLERS =============================== //

// USERS
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

// PRODUCT
const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

// SALES
const createSalesController = new CreateSalesController();
const listSalesController = new ListSalesController();
const updateSalesController = new UpdateSalesController();
const deleteSalesController = new DeleteSalesController();

// CATEGORY
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

// DELIVERY
const createDeliveryController = new CreateDeliveryController();
const listDeliveriesContoller = new ListDeliveriesContoller();
const updateDeliveryContoller = new UpdateDeliveryContoller();
const deleteDeliveryController = new DeleteDeliveryController();

// LOGIN
const authenticateUserController = new AuthenticateUserController();

// ==================== ROTAS =============================== //
const router = Router();

// USERS
router.post("/user/create", createUserController.handle);

// LOGIN
router.post("/user/login", authenticateUserController.handle);

// ENSURE AUTHENTICATE
router.use(ensureAuthenticate);

// USERS
router.get("/user/list", listUsersController.handle);
router.put("/user/update/:id", updateUserController.handle);
router.delete("/user/delete/:id", deleteUserController.handle);

// PRODUCT
router.post("/product/create", createProductController.handle);
router.get("/product/list", listProductsController.handle);
router.put("/product/update/:id", updateProductController.handle);
router.delete("/product/delete/:id", deleteProductController.handle);

// SALES
router.post("/sales/create", createSalesController.handle);
router.get("/sales/list", listSalesController.handle);
router.put("/sales/update/:id", updateSalesController.handle);
router.delete("/sales/delete/:id", deleteSalesController.handle);

// CATEGORY
router.post("/category/create", createCategoryController.handle);
router.get("/category/list", listCategoriesController.handle);
router.put("/category/update/:id", updateCategoryController.handle);
router.delete("/category/delete/:id", deleteCategoryController.handle);

// DELIVERY
router.post("/delivery/create", createDeliveryController.handle);
router.get("/delivery/list", listDeliveriesContoller.handle);
router.put("/delivery/update/:id", updateDeliveryContoller.handle);
router.delete("/delivery/delete/:id", deleteDeliveryController.handle);

export { router }