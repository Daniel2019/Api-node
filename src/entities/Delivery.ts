import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Sales } from "./Sales";

@Entity("Deliveries")
class Delivery {

    @PrimaryColumn()
    readonly id! : string;

    @OneToOne(() => Sales)
    @JoinColumn()
    public idSales: Sales

    @Column()
    public data_entrega! : string;

    @Column()
    public obs! : string;

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

export { Delivery }