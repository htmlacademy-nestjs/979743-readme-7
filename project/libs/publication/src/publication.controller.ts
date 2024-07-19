import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';

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
}
