import { Module } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { PublicationFactory } from './publication.factory';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';

@Module({
  imports: [],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationRepository, PublicationFactory],
  exports: [PublicationRepository],
})
export class PublicationModule {}