import { Module } from '@nestjs/common';
import { PostsListModule } from '@project/posts-list';

@Module({
  imports: [PostsListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
