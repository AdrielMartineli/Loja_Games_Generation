import { IsNotEmpty, isNotEmpty} from "class-validator";
import { Plataforma } from "src/plataforma/entities/plataforma.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produtos"})
export class Produtos{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length:100, nullable:false})
    nome:string

    @IsNotEmpty()
    @Column({length:100, nullable:false})
    genero:string

    @IsNotEmpty()
    @Column({length:1000, nullable:false})
    descricao:string

    @IsNotEmpty()
    @Column({length:1000, nullable:false})
    foto:string

    @IsNotEmpty()
    @Column({nullable:false})
    preco : number

    @ManyToOne(() => Plataforma, (plataforma) => plataforma.produto,{
        onDelete: "CASCADE"
    })
    plataforma: Plataforma

}