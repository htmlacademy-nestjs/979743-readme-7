import dayjs = require('dayjs');
import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentDto } from './dto/comment.dto';
import { CommentEntity } from './comment.entity';
import { COMMENT_NOT_FOUND } from './comment.constant';
import { Comment } from '@project/core';

@Injectable()
export class CommentsService {
  constructor(private readonly commentRepository: CommentRepository) {}
  public async createComment(dto: CommentDto): Promise<CommentEntity> {
    const comment = {
      ...dto,
      createCommentDate: dayjs().toDate(),
      commentAuthorId: '',
    };

    const commentEntity = new CommentEntity(comment);
    this.commentRepository.save(commentEntity);

    // this.publicationService.changeCommentsCount({ countChange: CountChange.Increase }, dto.publicationId);

    return commentEntity;
  }

  public async getComment(commentId: string): Promise<CommentEntity> {
    const comment = await this.commentRepository.findById(commentId);
    if (!comment) {
      throw new NotFoundException(COMMENT_NOT_FOUND);
    }

    return comment;
  }

  public async deleteComment(commentId: string) {
    const comment = await this.commentRepository.findById(commentId);
    if (!comment) {
      throw new NotFoundException(COMMENT_NOT_FOUND);
    }

    this.commentRepository.deleteById(commentId);

    // this.publicationService.changeCommentsCount({ countChange: CountChange.Decrease }, comment.publicationId);
  }

  public async getCommentsForPost(postId: string): Promise<Comment[]> {
    return this.commentRepository.getCommentCollection(postId);
  }
}
