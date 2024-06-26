import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Plataforma } from "../entities/plataforma.entity";
import { PlataformaService } from "../services/plataforma.service";

@Controller("/plataforma")
export class PlataformaController{
    constructor(private readonly plataformaService: PlataformaService){ }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Plataforma[]>{
        return this.plataformaService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',  ParseIntPipe)id:number): Promise<Plataforma>{
        return this.plataformaService.findById(id);
    }
    @Get('/plataforma/:plataforma')
    @HttpCode(HttpStatus.OK)
    findByPlataforma(@Param('plataforma') plataforma:string): Promise<Plataforma[]>{
        return this.plataformaService.findByPlataforma(plataforma);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()plataforma:Plataforma): Promise<Plataforma>{
        return this.plataformaService.create(plataforma);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() plataforma:Plataforma): Promise<Plataforma>{
        return this.plataformaService.update(plataforma);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
      return this.plataformaService.delete(id);
    }
}