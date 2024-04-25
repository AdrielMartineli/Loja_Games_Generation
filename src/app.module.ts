import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './produto/entities/Produto.entity';
import { ProdutoModule } from './produto/Produto.modules';
import { Plataforma } from './plataforma/entities/plataforma.entity';
import { PlataformaModule } from './plataforma/plataforma.module';
import { AuthModule } from './auth/auth.modules';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password:'root',
      database:'db_loja_games',
      entities:[Produtos, Plataforma, Usuario],
      synchronize: true,
    }),
    ProdutoModule,
    PlataformaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
