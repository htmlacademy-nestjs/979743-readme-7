import { Module } from '@nestjs/common';
import { PublicationModule } from '@project/publication';
import { PostlistController } from './post-list.controller';
import { PostlistService } from './post-list.service';

@Module({
  imports: [PublicationModule],
  controllers: [PostlistController],
  providers: [PostlistService],
  exports: [],
})
export class PostlistModule {}
