import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produtos } from "../entities/Produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Plataforma } from "src/plataforma/entities/plataforma.entity";

@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(Produtos)
        private produtoRepository: Repository<Produtos>
    ){ }

    async findAll(): Promise<Produtos[]>{
        return await this.produtoRepository.find({
            relations:{
                plataforma:true,
                usuario:true
            }
        });
    }

    async findById(id:number):Promise<Produtos>{
        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations:{
                plataforma:true,
                usuario:true
            }
        });
        if (!produto)
            throw new HttpException('produto não encontrado! ', HttpStatus.NOT_FOUND)

        return produto;
    }

    async findByNome(nome:string) : Promise<Produtos[]>{
        return await this.produtoRepository.find({
            where:{
                nome : ILike(`%${nome}%`)
            },
            relations:{
                plataforma:true,
                usuario:true
            }
        })
    }
    async create(produto: Produtos): Promise<Produtos>{
        return await this.produtoRepository.save(produto)
    }
    async update(produto: Produtos): Promise<Produtos> {
        
        let buscaProduto = await this.findById(produto.id);

        if (!buscaProduto || !produto.id)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
        
        return await this.produtoRepository.save(produto);
    }
    async delete(id:number): Promise<DeleteResult>{
        let buscaProduto = await this.findById(id);

        if(!buscaProduto)
            throw new HttpException('Postagem não encotnrada', HttpStatus.NOT_FOUND);

        return await this.produtoRepository.delete(id);
    }

}