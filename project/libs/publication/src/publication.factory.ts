import { EntityFactory, Post } from '@project/core';
import { PublicationEntity } from './publication.entity';

export class PublicationFactory implements EntityFactory<PublicationEntity> {
  public create(entityPlainData: Post): PublicationEntity {
    return new PublicationEntity(entityPlainData);
  }
}
