import { Body, Controller, Delete, Get, Param, Post, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { CommentResponseMessage } from './comment.constant';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentsService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: CommentResponseMessage.CommentCreated,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: CommentResponseMessage.CommentDataError,
  })
  @Post('new')
  public async create(@Body() dto: CommentDto) {
    const newComment = await this.commentService.createComment(dto);
    return newComment.toPOJO();
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: CommentResponseMessage.CommentDeleted,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.CommentNotFound,
  })
  @Delete(':commentId')
  public async deleteComment(@Param('commentId') id: string) {
    await this.commentService.deleteComment(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentResponseMessage.CommentFound,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.CommentNotFound,
  })
  @Get(':postId')
  public async getCommentsForPost(@Param('postId') postId: string) {
    const commentsCollection = this.commentService.getCommentsForPost(postId);
    return commentsCollection;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentResponseMessage.CommentCollectionLoaded,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.CommentCollectionEmpty,
  })
  @Get()
  public async getCommentCollection() {
    const commentsCollection = this.commentService.getAllComments();
    return commentsCollection;
  }
}
