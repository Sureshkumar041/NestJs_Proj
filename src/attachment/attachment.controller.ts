import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateAttachmentDto } from './dto/create-attachment.dto';

@Controller('attachment')
@ApiTags('Attachments')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Post('add')
  // @UseInterceptors(FileInterceptor('attachment'))
  @ApiBody({ type: CreateAttachmentDto })
  async singleAttachmentUpload(
    @Body() body: CreateAttachmentDto,
    // @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const result = await this.attachmentService.addAttachmentService(body);
    return res.send(result);
  }
}
