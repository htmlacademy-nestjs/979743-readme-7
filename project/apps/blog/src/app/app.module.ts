import { Module } from '@nestjs/common';
import { PostlistModule } from '@project/post-list';
import { PublicationModule } from '@project/publication';

@Module({
  imports: [PostlistModule, PublicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
