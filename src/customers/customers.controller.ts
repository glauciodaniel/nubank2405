import { Body, Controller, Get, Post } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dto/createCustomer.dto';
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return this.customersService.getAllCustomers();
  }

  @Post()
  async createCustomer(@Body() data: CreateCustomerDTO): Promise<Customer> {
    return this.customersService.createCustomer(data);
  }
}
