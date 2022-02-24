import { Controller, Get, Post } from '@nestjs/common';
import { MetadataService } from 'metadata/metadata.service';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Get()
  getMetadata(): string {
    return this.metadataService.getMetadata();
  }

  @Post()
  postMetadata(): string {
    return this.metadataService.postMetadata();
  }
}
