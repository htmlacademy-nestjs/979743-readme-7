import { Module } from '@nestjs/common';
import { FileUploaderModule } from '@project/files-uploader';
import { FilesConfigModule, getMongooseOptions } from '@project/files-config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FilesConfigModule, FileUploaderModule, MongooseModule.forRootAsync(getMongooseOptions())],
  controllers: [],
  providers: [],
})
export class AppModule {}
