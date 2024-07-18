import { Injectable } from '@nestjs/common';
import { EntityFactory, Post } from '@project/core';
import { PublicationEntity } from './publication.entity';

@Injectable()
export class PublicationFactory implements EntityFactory<PublicationEntity> {
  public create(entityPlainData: Post): PublicationEntity {
    return new PublicationEntity(entityPlainData);
  }
}
