import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Plataforma } from "./entities/plataforma.entity";
import { PlataformaService } from "./services/plataforma.service";
import { PlataformaController } from "./controllers/plataforma.controllers";

@Module({
    imports: [TypeOrmModule.forFeature([Plataforma])],
    providers: [PlataformaService],
    controllers: [PlataformaController],
    exports: [TypeOrmModule]
})
export class PlataformaModule {}