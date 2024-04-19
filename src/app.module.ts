import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './produto/entities/Produto.entity';
import { ProdutoModule } from './produto/Produto.modules';
import { Plataforma } from './plataforma/entities/plataforma.entity';
import { PlataformaModule } from './plataforma/plataforma.module';
@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password:'root',
      database:'db_loja_games',
      entities:[Produtos, Plataforma],
      synchronize: true,
    }),
    ProdutoModule,
    PlataformaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
