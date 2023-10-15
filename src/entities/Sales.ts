import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Product } from "./Product";

@Entity("Sales")
class Sales {
    
    @PrimaryColumn()
    readonly id! : string;

    @ManyToMany(() => Product)
    @JoinTable()
    public productId! : Product[];

    @ManyToOne(() => User, (user) => user.sales)
    public userId! : User;

    @Column()
    public total! : number;

    @Column()
    public desc! : string;

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

export { Sales }