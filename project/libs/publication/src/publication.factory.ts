import { Injectable } from '@nestjs/common';
import dayjs = require('dayjs');
import { EntityFactory, Post, PostStatus } from '@project/core';
import { PublicationEntity } from './publication.entity';
import { CreatePublicationDto } from './dto/create-publication.dto';

@Injectable()
export class PublicationFactory implements EntityFactory<PublicationEntity> {
  public create(entityPlainData: Post): PublicationEntity {
    return new PublicationEntity(entityPlainData);
  }

  public static createPostFromDto(dto: CreatePublicationDto): PublicationEntity {
    const post = {
      ...dto,
      authorID: '',
      createDate: dayjs().toDate(),
      lastEditDate: dayjs().toDate(),
      postStatus: PostStatus.Published,
      isReposted: false,
      likesCount: 0,
      commentsCount: 0,
      comments: [],
    };

    return new PublicationEntity(post);
  }
}
