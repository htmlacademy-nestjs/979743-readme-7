import { Body, Controller, Delete, Get, Param, Patch, Post, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { ChangeCountDto } from './dto/change-count.dto';
import { PublicationResponseMessage } from './publication.constant';

@ApiTags('post')
@Controller('post')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: PublicationResponseMessage.PublicationCreated,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: PublicationResponseMessage.PublicationDataError,
  })
  @Post('new')
  public async create(@Body() dto: CreatePublicationDto) {
    const newPublication = await this.publicationService.createPost(dto);
    return newPublication.toPOJO();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PublicationResponseMessage.PublicationFound,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: PublicationResponseMessage.PublicationNotFound,
  })
  @Get(':id')
  public async getDetails(@Param('id') id: string) {
    const publicationDetails = await this.publicationService.getPostDetails(id);
    return publicationDetails.toPOJO();
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: PublicationResponseMessage.PublicationDeleted,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: PublicationResponseMessage.PublicationNotFound,
  })
  @Delete(':id')
  public async deletePost(@Param('id') id: string) {
    await this.publicationService.deletePost(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PublicationResponseMessage.PublicationEdited,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: PublicationResponseMessage.PublicationDataError,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: PublicationResponseMessage.PublicationNotFound,
  })
  @Patch(':id')
  public async editPost(@Param('id') id: string, @Body() dto: CreatePublicationDto) {
    const editedPost = await this.publicationService.editPost(dto, id);
    return editedPost.toPOJO();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PublicationResponseMessage.PublicationEdited,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: PublicationResponseMessage.PublicationNotFound,
  })
  @Patch(':id/change-likes')
  public async changeLikesCount(@Param('id') id: string, @Body() dto: ChangeCountDto) {
    const editedPost = await this.publicationService.changeLikesCount(dto, id);
    return editedPost.toPOJO();
  }
}
