import { Module } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { PublicationFactory } from './publication.factory';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';
import { PrismaClientModule } from '@project/blog-models';

@Module({
  imports: [PrismaClientModule],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationRepository, PublicationFactory],
  exports: [PublicationRepository, PublicationService],
})
export class PublicationModule {}
