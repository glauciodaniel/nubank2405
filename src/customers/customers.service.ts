import { Injectable } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDTO } from './dto/createCustomer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async getAllCustomers(): Promise<Customer[]> {
    return await this.prisma.customer.findMany({
      include: {
        userTable: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  // ****************************************
  // usuário é uma coisa | customer ou cliente é outra.
  // usuário todos que usam o sistema | cliente, funcionario, fornecedor, parceiro, etc.
  async createCustomer(data: CreateCustomerDTO): Promise<Customer> {
    return await this.prisma.customer.create({
      data: {
        cpf: data.cpf,
        mobile: data.mobile,
        userTable: {
          create: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      },
      include: {
        userTable: {
          select: {
            name: true,
            email: true,
            password: true,
          },
        },
      },
    });
  }
}
