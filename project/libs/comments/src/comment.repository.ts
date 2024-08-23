import { BasePostgresRepository } from '@project/data-access';
import { PrismaClientService } from '@project/blog-models';

import { CommentEntity } from './comment.entity';
import { CommentFactory } from './comment.factory';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from '@project/core';
import { MAX_COMMMENT_LIMIT } from './comment.constant';

@Injectable()
export class CommentRepository extends BasePostgresRepository<CommentEntity, Comment> {
  constructor(entityFactory: CommentFactory, readonly client: PrismaClientService) {
    super(entityFactory, client);
  }

  public async save(entity: CommentEntity): Promise<void> {
    const pojoEntity = entity.toPOJO();
    const record = await this.client.comment.create({
      data: {
        ...pojoEntity,
      },
    });

    entity.id = record.id;
  }

  public async deleteById(id: string): Promise<void> {
    await this.client.comment.delete({
      where: {
        id,
      },
    });
  }

  public async getCommentCollection(): Promise<Comment[]> {
    const documents = await this.client.comment.findMany({
      take: MAX_COMMMENT_LIMIT,
    });
    return documents.map((document) => this.createEntityFromDocument(document));
  }

  public async findById(id: string): Promise<CommentEntity> {
    const document = await this.client.comment.findFirst({
      where: {
        id,
      },
    });

    if (!document) {
      throw new NotFoundException(`Comment with id ${id} not found.`);
    }

    return this.createEntityFromDocument(document);
  }
}
