import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateHelloDTO } from './dto/createHello.dto';
import { UpdateHelloDTO } from './dto/updateHello.dto';

// localhost:3000
@Controller()
export class AppController {
  //dependency injection
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createHello(@Body() data: CreateHelloDTO): string {
    return this.appService.createHello(data);
  }
  // localhost:3000/50
  @Put(':id')
  updateHello(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateHelloDTO,
  ): string {
    return this.appService.updateHello(id, data);
  }
}
