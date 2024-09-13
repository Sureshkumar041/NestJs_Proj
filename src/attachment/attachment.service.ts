import { Injectable } from '@nestjs/common';
import { Attachment } from './entity/attachment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAttachmentDto } from './dto/create-attachment.dto';

@Injectable()
export class AttachmentService {
  constructor(
    @InjectRepository(Attachment)
    private readonly AttachmentModal: Repository<Attachment>,
  ) {}

  async addAttachmentService(createAttachmentDto: CreateAttachmentDto) {
    console.log('IN');
    return '';
  }
}
