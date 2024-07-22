import { Controller, Get } from '@nestjs/common';
import { PostlistService } from './post-list.service';
import { Post } from '@project/core';

@Controller('postlist')
export class PostlistController {
  constructor(private readonly postlistService: PostlistService) {}

  @Get()
  public async getAllPosts(): Promise<Post[]> {
    const allPosts = await this.postlistService.getAllPosts();
    return allPosts;
  }
}
