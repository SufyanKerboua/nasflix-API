import { Injectable } from '@nestjs/common';

@Injectable()
export class MetadataService {
  getMetadata(): string {
    return 'get some metadata';
  }

  postMetadata(): string {
    return 'write some metadata';
  }
}
