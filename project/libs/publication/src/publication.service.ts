import dayjs = require('dayjs');
import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PostStatus } from '@project/core';
import { PublicationEntity } from './publication.entity';
import { PublicationResponseMessage } from './publication.constant';
import { ChangeCountDto } from './dto/change-count.dto';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  public async createPost(dto: CreatePublicationDto): Promise<PublicationEntity> {
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

    const publicationEntity = new PublicationEntity(post);

    this.publicationRepository.save(publicationEntity);
    // console.log(publicationEntity.id);
    return publicationEntity;
  }

  public async getPostDetails(publicationID: string): Promise<PublicationEntity> {
    const publicationDetails = await this.publicationRepository.findById(publicationID);

    if (!publicationDetails) {
      throw new NotFoundException(PublicationResponseMessage.PublicationNotFound);
    }

    return publicationDetails;
  }

  public async deletePost(publicationID: string) {
    const publication = await this.publicationRepository.findById(publicationID);

    if (!publication) {
      throw new NotFoundException(PublicationResponseMessage.PublicationNotFound);
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

    const editedPublicationEntity = new PublicationEntity(editedPublication);
    this.publicationRepository.update(editedPublicationEntity);

    return editedPublicationEntity;
  }

  public async changeLikesCount(dto: ChangeCountDto, id: string): Promise<PublicationEntity> {
    const publication = (await this.publicationRepository.findById(id)).toPOJO();
    const editedPublication = {
      ...publication,
      likesCount: publication.likesCount + dto.countChange,
    };

    const editedPublicationEntity = new PublicationEntity(editedPublication);
    this.publicationRepository.update(editedPublicationEntity);

    return editedPublicationEntity;
  }

  public async changeCommentsCount(dto: ChangeCountDto, id: string): Promise<PublicationEntity> {
    const publication = (await this.publicationRepository.findById(id)).toPOJO();
    const editedPublication = {
      ...publication,
      commentsCount: publication.commentsCount + dto.countChange,
    };

    const editedPublicationEntity = new PublicationEntity(editedPublication);
    this.publicationRepository.update(editedPublicationEntity);

    return editedPublicationEntity;
  }
}
