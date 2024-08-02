import { Module } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { PublicationFactory } from './publication.factory';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';
import { CommentModule } from '@project/comments';

@Module({
  imports: [],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationRepository, PublicationFactory],
  exports: [PublicationRepository, PublicationService],
})
export class PublicationModule {}
