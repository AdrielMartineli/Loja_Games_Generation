import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produtos } from "src/produto/entities/Produto.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    public senha: string

    @Column({length: 5000 }) 
    public foto: string

    @OneToMany(() => Produtos, (produto) => produto.usuario)
    produto: Produtos[]

}