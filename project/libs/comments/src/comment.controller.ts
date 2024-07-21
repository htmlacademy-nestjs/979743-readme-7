import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { runInThisContext } from 'vm';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentsService) {}

  @Post('new')
  public async create(@Body() dto: CommentDto) {
    const newComment = await this.commentService.createComment(dto);
    return newComment.toPOJO();
  }

  @Get(':id')
  public async getComment(@Param('id') id: string) {
    const comment = await this.commentService.getComment(id);
    return comment.toPOJO();
  }

  @Delete(':id')
  public async deleteComment(@Param('id') id: string) {
    await this.commentService.deleteCmment(id);
  }
}
