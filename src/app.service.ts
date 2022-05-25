import { Injectable } from '@nestjs/common';
import { CreateHelloDTO } from './dto/createHello.dto';
import { UpdateHelloDTO } from './dto/updateHello.dto';

//   http://localhost:3000

@Injectable()
export class AppService {
  getHello(): string {
    return 'Vai Corinthians!!';
  }

  // TypeScript - Forte tipagem de dados.
  //  Objeto literal { chave: valor}

  // JSON - JavaScript Object Notation
  createHello(data: CreateHelloDTO): string {
    // criando no banco de dados

    return `Hello ${data.name.toUpperCase()}`;
  }

  updateHello(id: number, data: UpdateHelloDTO): string {
    // criando no banco de dados

    return `Update ${data.name.toUpperCase()}`;
  }
}
