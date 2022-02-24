import { Module } from '@nestjs/common';
import { MetadataController } from 'metadata/metadata.controller';
import { MetadataService } from 'metadata/metadata.service';

@Module({
  controllers: [MetadataController],
  providers: [MetadataService],
})
export class MetadataModule {}
