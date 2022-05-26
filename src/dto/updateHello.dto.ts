// 1º instale o comando abaixo:
// npm install @nestjs/mapped-types

import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateHelloDTO } from './createHello.dto';

export class UpdateHelloDTO extends PartialType(
  OmitType(CreateHelloDTO, [] as const),
) {}
