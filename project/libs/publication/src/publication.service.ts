import { Injectable } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { CreatePublicationDto } from './dto/create-publication.dto';
import dayjs = require('dayjs');
import { PostStatus } from '@project/core';
import { PublicationEntity } from './publication.entity';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  public async createPost(dto: CreatePublicationDto): Promise<PublicationEntity> {
    const {
      type,
      tags,
      link,
      linkDescription,
      photo,
      videoTitle,
      videoLink,
      quoteText,
      quoteAuthor,
      textTitle,
      textNotice,
      textContent,
    } = dto;

    const post = {
      type,
      author: '',
      createDate: dayjs().toDate(),
      lastEditDate: dayjs().toDate(),
      postStatus: PostStatus.Published,
      tags,
      link,
      linkDescription,
      photo,
      videoTitle,
      videoLink,
      quoteText,
      quoteAuthor,
      textTitle,
      textNotice,
      textContent,
    };

    const publicationEntity = await new PublicationEntity(post);

    this.publicationRepository.save(publicationEntity);

    return publicationEntity;
  }
}
