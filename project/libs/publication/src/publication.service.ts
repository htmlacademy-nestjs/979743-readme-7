import dayjs = require('dayjs');
import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PostStatus } from '@project/core';
import { PublicationEntity } from './publication.entity';
import { PublicationResponseMessage } from './publication.constant';
import { ChangeCountDto } from './dto/change-count.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationQuery } from './publication.query';
import { PaginationResult } from '@project/core';
import { PublicationFactory } from './publication.factory';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  public async getAllPosts(query?: PublicationQuery): Promise<PaginationResult<PublicationEntity>> {
    return this.publicationRepository.find(query);
  }

  public async createPost(dto: CreatePublicationDto): Promise<PublicationEntity> {
    const publicationEntity = PublicationFactory.createPostFromDto(dto);
    this.publicationRepository.save(publicationEntity);
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
    try {
      this.publicationRepository.deleteById(publicationID);
    } catch {
      throw new NotFoundException(PublicationResponseMessage.PublicationNotFound);
    }
  }

  public async editPost(dto: UpdatePublicationDto, id: string): Promise<PublicationEntity> {
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
