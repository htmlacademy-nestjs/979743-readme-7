import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostlistService } from './post-list.service';
import { Post } from '@project/core';
import { PostlistResponseMessage } from './post-list.constant';

@ApiTags('postlist')
@Controller('postlist')
export class PostlistController {
  constructor(private readonly postlistService: PostlistService) {}

  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: PostlistResponseMessage.PostlistLoaded,
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   description: PostlistResponseMessage.PostlistEmpty,
  // })
  // @Get()
  // public async getAllPosts(): Promise<Post[]> {
  //   const allPosts = await this.postlistService.getAllPosts();
  //   return allPosts;
  // }
}
