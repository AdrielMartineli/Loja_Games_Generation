import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produtos } from "./entities/Produto.entity";
import { ProdutoService } from "./services/Produto.service";
import { ProdutoController } from "./controllers/Produto.controller";

@Module({
    imports : [TypeOrmModule.forFeature([Produtos])],
    providers:[ProdutoService],
    controllers:[ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule{}