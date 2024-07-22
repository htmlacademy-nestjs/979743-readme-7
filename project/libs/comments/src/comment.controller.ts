import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CommentDto } from './dto/comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentsService) {}

  @Post('new')
  public async create(@Body() dto: CommentDto) {
    const newComment = await this.commentService.createComment(dto);
    return newComment.toPOJO();
  }

  @Delete(':id')
  public async deleteComment(@Param('id') id: string) {
    await this.commentService.deleteCmment(id);
  }

  @Get(':postId')
  public async getCommentsForPost(@Param('postId') postId: string) {
    const commentsCollection = this.commentService.getCommentsForPost(postId);
    return commentsCollection;
  }

  @Get()
  public async getCommentCollection() {
    const commentsCollection = this.commentService.getAllComments();
    return commentsCollection;
  }
}
