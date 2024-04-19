import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../services/Produto.service";
import { Produtos } from "../entities/Produto.entity";

@Controller("/produto")
export class ProdutoController{
    constructor(private readonly produtoService: ProdutoService){ }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produtos[]>{
        return this.produtoService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Produtos>{
        return this.produtoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome:string): Promise<Produtos[]>{
        return this.produtoService.findByNome(nome);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto:Produtos): Promise<Produtos>{
        return this.produtoService.create(produto);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produtos): Promise<Produtos>{
        return this.produtoService.update(produto);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.delete(id);
    }
}