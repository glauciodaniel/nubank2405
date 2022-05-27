import { Injectable } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

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
}

// npx prisma db pull
