import { Injectable, NotFoundException } from '@nestjs/common';

import { BasePostgresRepository } from '@project/data-access';
import { PrismaClientService } from '@project/blog-models';
import { PublicationEntity } from './publication.entity';
import { PublicationFactory } from './publication.factory';
import { Post } from '@project/core';

@Injectable()
export class PublicationRepository extends BasePostgresRepository<PublicationEntity, Post> {
  constructor(entityFactory: PublicationFactory, readonly client: PrismaClientService) {
    super(entityFactory, client);
  }

  public async save(entity: PublicationEntity): Promise<void> {
    const record = await this.client.post.create({
      data: { ...entity.toPOJO() },
      // data: {
      //   id: '',
      //   type: '',
      //   author: '',
      //   createDate: '',
      //   lastEditDate: '',
      //   postStatus: '',
      //   isReposted: true,
      //   likesCount: 0,
      //   commentsCount: 0,
      //   // tags: '',
      //   link: '',
      //   linkDescription: '',
      //   photo: '',
      //   videoTitle: '',
      //   videoLink: '',
      //   quoteText: '',
      //   quoteAuthor: '',
      //   textTitle: '',
      //   textNotice: '',
      //   textContent: '',
      // },
    });

    entity.id = record.id;
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
