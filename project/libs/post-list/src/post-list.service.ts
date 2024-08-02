import { Injectable } from '@nestjs/common';
import { Post } from '@project/core';
import { PublicationRepository } from '@project/publication';

@Injectable()
export class PostlistService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  public async getAllPosts(): Promise<Post[]> {
    const postCollection = await this.publicationRepository.getPostCollection();
    return postCollection;
  }
}
