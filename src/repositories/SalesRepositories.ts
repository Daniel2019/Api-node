import { EntityRepository, Repository } from "typeorm";
import { Sales } from "../entities/Sales";

@EntityRepository(Sales)
class SalesRepositories extends Repository<Sales> {}

export { SalesRepositories }