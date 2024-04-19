import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Plataforma } from "../entities/plataforma.entity";

@Injectable()
export class PlataformaService{
    constructor(
        @InjectRepository(Plataforma)
        private plataformaRepository: Repository<Plataforma>
    ){ }

    async findAll(): Promise<Plataforma[]>{
        return await this.plataformaRepository.find({
            relations:{
                produto:true
            }
        });
    }

    async findById(id:number): Promise<Plataforma>{
        let plataforma = await this.plataformaRepository.findOne({
            where: {
                id
            },
            relations: {
                produto: true
            }
        });

        if (!Plataforma)
            throw new HttpException('Plataorma não encontrada', HttpStatus.NOT_FOUND);

        return plataforma;
    }
    async findByPlataforma(plataforma:string): Promise<Plataforma[]>{
        return await this.plataformaRepository.find({
            where: {
                plataforma: ILike(`%${plataforma}%`)
            },
            relations:{
                produto:true
            }
        })
    }

    async update(plataforma: Plataforma): Promise<Plataforma>{
        let buscaPlataforma = await this.findById(plataforma.id);

        if(!buscaPlataforma || !plataforma.id)
            throw new HttpException('Plataforma não encontrada!', HttpStatus.NOT_FOUND);

        return await this.plataformaRepository.save(plataforma);
    }
    async delete(id: number): Promise<DeleteResult> {
        let buscaPlataforma = await this.findById(id);

        if(!buscaPlataforma)
            throw new HttpException('Plataforma não encontrada!', HttpStatus.NOT_FOUND);

        return await this.plataformaRepository.delete(id);
    }
async create(Plataforma:Plataforma):Promise<Plataforma>{
    return await this.plataformaRepository.save(Plataforma);
}
}