import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { ChangeCountDto } from './dto/change-count.dto';

@Controller('post')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post('new')
  public async create(@Body() dto: CreatePublicationDto) {
    const newPublication = await this.publicationService.createPost(dto);
    return newPublication.toPOJO();
  }

  @Get(':id')
  public async getDetails(@Param('id') id: string) {
    const publicationDetails = await this.publicationService.getPostDetails(id);
    return publicationDetails.toPOJO();
  }

  @Delete(':id')
  public async deletePost(@Param('id') id: string) {
    await this.publicationService.deletePost(id);
  }

  @Patch(':id')
  public async editPost(@Param('id') id: string, @Body() dto: CreatePublicationDto) {
    const editedPost = await this.publicationService.editPost(dto, id);
    return editedPost.toPOJO();
  }

  @Get()
  public async getPostCollection() {
    const postCollection = await this.publicationService.getAllPosts();
    return postCollection;
  }

  @Patch(':id/change-likes')
  public async changeLikesCount(@Param('id') id: string, @Body() dto: ChangeCountDto) {
    const editedPost = await this.publicationService.changeLikesCount(dto, id);
    return editedPost.toPOJO();
  }
}
