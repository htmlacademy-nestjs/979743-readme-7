import { Module } from '@nestjs/common';
import { PublicationModule } from '@project/publication';
import { CommentModule } from '@project/comments';

@Module({
  imports: [PublicationModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
