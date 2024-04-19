import { IsNotEmpty } from "class-validator";
import { Produtos } from "src/produto/entities/Produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_plataformas"})
export class Plataforma {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    plataforma: string
    
    @OneToMany(()=> Produtos, (produto) =>produto.plataforma)
    produto : Produtos[]
}