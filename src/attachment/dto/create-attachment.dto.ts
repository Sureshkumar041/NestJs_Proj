import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAttachmentDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  file: string;
}
