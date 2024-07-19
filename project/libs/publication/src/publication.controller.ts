import { Body, Controller, Post } from '@nestjs/common';
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
}
