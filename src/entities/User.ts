import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Sales } from "./Sales";

@Entity("Users")
class User{

    @PrimaryColumn()
    readonly id!: string;

    @Column()
    public name!: string;

    @Column()
    public email!: string;

    @Column()
    public admin!: boolean;

    @Column()
    public password!: string;

    @OneToMany(()=> Sales, (sales) => sales.userId)
    public sales : Sales;

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

export { User };