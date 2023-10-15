import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./Product";

@Entity("Categories")
class Category {

    @PrimaryColumn()
    readonly id! : string;

    @Column()
    public name! : string;

    @CreateDateColumn()
    public created_date!: Date;

    @UpdateDateColumn()
    public update_date!: Date;

    @OneToMany(() => Product, (product) => product.category)
    public products: Product[]

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Category }