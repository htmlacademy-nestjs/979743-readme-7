import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { BasePostgresRepository } from '@project/data-access';
import { PrismaClientService } from '@project/blog-models';
import { PaginationResult } from '@project/core';
import { PublicationEntity } from './publication.entity';
import { PublicationFactory } from './publication.factory';
import { PublicationQuery } from './publication.query';
import { Post } from '@project/core';
import { PostFilter, postFilterToPrismaFilter } from './publication.filter';
import { DEFAULT_POST_STATUS } from './publication.constant';
// import { MAX_POST_LIMIT } from './publication.constant';

@Injectable()
export class PublicationRepository extends BasePostgresRepository<PublicationEntity, Post> {
  constructor(entityFactory: PublicationFactory, readonly client: PrismaClientService) {
    super(entityFactory, client);
  }

  private async getPostCount(where: Prisma.PostWhereInput): Promise<number> {
    return this.client.post.count({ where });
  }

  private calculatePostsPage(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
  }

  public async save(entity: PublicationEntity): Promise<void> {
    const pojoEntity = entity.toPOJO();
    const record = await this.client.post.create({
      data: {
        ...pojoEntity,
        comments: {
          connect: [],
        },
      },
    });

    entity.id = record.id;
  }

  public async findById(id: string): Promise<PublicationEntity> {
    const document = await this.client.post.findFirst({
      where: {
        id,
      },
      include: {
        comments: true,
      },
    });

    if (!document) {
      throw new NotFoundException(`Publication with id ${id} not found.`);
    }

    return this.createEntityFromDocument(document as Post);
  }

  public async deleteById(id: string): Promise<void> {
    await this.client.post.delete({
      where: {
        id,
      },
    });
  }

  public async update(entity: PublicationEntity): Promise<void> {
    const pojoEntity = entity.toPOJO();
    await this.client.post.update({
      where: { id: entity.id },
      data: {
        ...pojoEntity,
        comments: {
          connect: [],
        },
        // comments: {
        //   set: pojoEntity.comments.map((comment) => ({ id: comment.id })),
        // },
      },
      include: {
        comments: true,
      },
    });
  }

  public async findByIds(ids: string[]): Promise<PublicationEntity[]> {
    const records = await this.client.post.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return records.map((record) => this.createEntityFromDocument(record as Post));
  }

  public async find(query?: PublicationQuery): Promise<PaginationResult<PublicationEntity>> {
    const skip = query?.page && query?.limit ? (query.page - 1) * query.limit : undefined;
    const take = query?.limit;
    const where: Prisma.PostWhereInput = {};
    const orderBy: Prisma.PostOrderByWithRelationInput = {};

    where.postStatus = DEFAULT_POST_STATUS;

    if (query?.type) {
      where.type = query.type;
    }

    if (query?.sortDirection) {
      orderBy.createDate = query.sortDirection;
    }

    const [records, postCount] = await Promise.all([
      this.client.post.findMany({
        where,
        orderBy,
        skip,
        take,
        include: {
          comments: true,
        },
      }),
      this.getPostCount(where),
    ]);

    return {
      entities: records.map((record) => this.createEntityFromDocument(record as Post)),
      currentPage: query?.page,
      totalPages: this.calculatePostsPage(postCount, take),
      itemsPerPage: take,
      totalItems: postCount,
    };
  }
}
