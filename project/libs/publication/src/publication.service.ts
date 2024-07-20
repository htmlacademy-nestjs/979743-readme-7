import dayjs = require('dayjs');
import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PostStatus } from '@project/core';
import { PublicationEntity } from './publication.entity';
import { PUBLICATION_NOT_FOUND } from './publication.constant';

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
      isReposted: false,
      likesCount: 0,
      commentsCount: 0,
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

  public async getPostDetails(publicationID: string): Promise<PublicationEntity> {
    const publicationDetails = await this.publicationRepository.findById(publicationID);

    if (!publicationDetails) {
      throw new NotFoundException(PUBLICATION_NOT_FOUND);
    }

    return publicationDetails;
  }

  public async deletePost(publicationID: string) {
    const publication = await this.publicationRepository.findById(publicationID);

    if (!publication) {
      throw new NotFoundException(PUBLICATION_NOT_FOUND);
    }

    this.publicationRepository.deleteById(publicationID);
  }

  public async editPost(dto: CreatePublicationDto, id: string): Promise<PublicationEntity> {
    const publication = (await this.publicationRepository.findById(id)).toPOJO();
    const editedPublication = {
      ...publication,
      ...dto,
      lastEditDate: dayjs().toDate(),
    };

    const editedPublicationEntity = await new PublicationEntity(editedPublication);
    this.publicationRepository.update(editedPublicationEntity);

    return editedPublicationEntity;
  }
}
