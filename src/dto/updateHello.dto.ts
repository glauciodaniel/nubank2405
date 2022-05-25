import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateHelloDTO } from './createHello.dto';

// npm install @nestjs/mapped-types

export class UpdateHelloDTO extends PartialType(
  OmitType(CreateHelloDTO, [] as const),
) {}
