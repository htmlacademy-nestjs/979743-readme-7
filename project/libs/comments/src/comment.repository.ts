import { BaseMemoryRepository } from '@project/data-access';
import { CommentEntity } from './comment.entity';
import { CommentFactory } from './comment.factory';
import { Injectable } from '@nestjs/common';
import { Comment } from '@project/core';

@Injectable()
export class CommentRepository extends BaseMemoryRepository<CommentEntity> {
  constructor(entityFactory: CommentFactory) {
    super(entityFactory);
  }

  public getCommentCollection(): Comment[] {
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
