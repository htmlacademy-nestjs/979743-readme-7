import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { PublicationEntity } from './publication.entity';
import { PublicationFactory } from './publication.factory';
import { Post } from '@project/core';

@Injectable()
export class PublicationRepository extends BaseMemoryRepository<PublicationEntity> {
  constructor(entityFactory: PublicationFactory) {
    super(entityFactory);
  }

  public getPostCollection(): Post[] {
    const collection = [];
    this.entities.forEach((value, key) => {
      collection.push({
        ...value,
        key,
      });
    });
    return collection;
  }
}
