import dayjs = require('dayjs');
import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentDto } from './dto/comment.dto';
import { CommentEntity } from './comment.entity';
import { COMMENT_NOT_FOUND } from './comment.constant';

@Injectable()
export class CommentsService {
  constructor(private readonly commentRepository: CommentRepository) {}
  public async createComment(dto: CommentDto): Promise<CommentEntity> {
    // const { publicationId, commentText } = dto;
    const comment = {
      ...dto,
      createCommentDate: dayjs().toDate(),
      commentAuthor: '',
    };

    const commentEntity = await new CommentEntity(comment);
    this.commentRepository.save(commentEntity);
    return commentEntity;
  }

  public async getComment(commentId: string): Promise<CommentEntity> {
    const comment = await this.commentRepository.findById(commentId);
    if (!comment) {
      throw new NotFoundException(COMMENT_NOT_FOUND);
    }

    return comment;
  }

  public async deleteCmment(commentId: string) {
    const comment = await this.commentRepository.findById(commentId);
    if (!comment) {
      throw new NotFoundException(COMMENT_NOT_FOUND);
    }

    this.commentRepository.deleteById(commentId);
  }
}
