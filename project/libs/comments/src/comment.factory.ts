import { Comment, EntityFactory } from '@project/core';
import { CommentEntity } from './comment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentFactory implements EntityFactory<CommentEntity> {
  public create(entityPlainData: Comment): CommentEntity {
    return new CommentEntity(entityPlainData);
  }
}
