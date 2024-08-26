import { Module } from '@nestjs/common';
import { FileUploaderModule } from '@project/files-uploader';
import { FilesConfigModule } from '@project/files-config';

@Module({
  imports: [FilesConfigModule, FileUploaderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
