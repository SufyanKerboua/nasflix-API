import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.service';
import { UsersModule } from 'users/users.module';
// import { MetadataController } from './metadata/metadata.controller';
// import { MetadataService } from './metadata/metadata.service';
import { MetadataModule } from 'metadata/metadata.module';

@Module({
  imports: [UsersModule, MetadataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
