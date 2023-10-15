import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Category } from "./Category";

@Entity("Products")
class Product {

    @PrimaryColumn()
    readonly id! : string;

    @Column()
    public name! : string;

    @Column()
    public description! : string;

    @Column()
    public price! : number;

    @Column()
    public url! : string;

    @ManyToOne(() => Category, (category) => category.products)
    public category : Category;

    @CreateDateColumn()
    public created_date!: Date;

    @UpdateDateColumn()
    public update_date!: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Product }