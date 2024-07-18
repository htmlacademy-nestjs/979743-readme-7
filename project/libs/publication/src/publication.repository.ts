import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { PublicationEntity } from './publication.entity';
import { PublicationFactory } from './publication.factory';

@Injectable()
export class PublicationRepository extends BaseMemoryRepository<PublicationEntity>{
  constructor(entityFactory: PublicationFactory) {
    super(entityFactory);
  }
};
