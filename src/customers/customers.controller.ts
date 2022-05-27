import { Controller, Get } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { CustomersService } from './customers.service';
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return this.customersService.getAllCustomers();
  }
}
