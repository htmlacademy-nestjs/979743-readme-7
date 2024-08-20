import { Injectable, NotFoundException } from '@nestjs/common';

import { BasePostgresRepository } from '@project/data-access';
import { PrismaClientService } from '@project/blog-models';
import { PublicationEntity } from './publication.entity';
import { PublicationFactory } from './publication.factory';
import { Post } from '@project/core';
import { PostFilter, postFilterToPrismaFilter } from './publication.filter';
import { MAX_POST_LIMIT } from './publication.constant';

@Injectable()
export class PublicationRepository extends BasePostgresRepository<PublicationEntity, Post> {
  constructor(entityFactory: PublicationFactory, readonly client: PrismaClientService) {
    super(entityFactory, client);
  }

  public async save(entity: PublicationEntity): Promise<void> {
    const record = await this.client.post.create({
      data: { ...entity.toPOJO() },
    });

    entity.id = record.id;
  }

  public async findById(id: string): Promise<PublicationEntity> {
    const document = await this.client.post.findFirst({
      where: {
        id,
      },
    });

    if (!document) {
      throw new NotFoundException(`Category with id ${id} not found.`);
    }

    return this.createEntityFromDocument(document);
  }

  public async deleteById(id: string): Promise<void> {
    await this.client.post.delete({
      where: {
        id,
      },
    });
  }

  public async update(entity: PublicationEntity): Promise<void> {
    await this.client.post.update({
      where: { id: entity.id },
      data: {
        type: entity.type,
      },
    });
  }

  public async find(filter?: PostFilter): Promise<PublicationEntity[]> {
    const where = filter ?? postFilterToPrismaFilter(filter);

    const documents = await this.client.post.findMany({
      where,
      take: MAX_POST_LIMIT,
    });

    return documents.map((document) => this.createEntityFromDocument(document));
  }

  public async findByIds(ids: string[]): Promise<PublicationEntity[]> {
    const records = await this.client.post.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return records.map((record) => this.createEntityFromDocument(record));
  }

  // public getPostCollection(): Post[] {
  //   const collection = [];
  //   this.entities.forEach((value, key) => {
  //     collection.push({
  //       ...value,
  //       key,
  //     });
  //   });
  //   return collection;
  // }
}
