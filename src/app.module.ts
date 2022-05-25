import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

//decorator é um recurso que muda o comportamento de um método ou classe.
@Module({
  imports: [CustomersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
