import dayjs = require('dayjs');
import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentDto } from './dto/comment.dto';
import { CommentEntity } from './comment.entity';
import { COMMENT_NOT_FOUND } from './comment.constant';
import { Comment } from '@project/core';
import { PublicationService } from '@project/publication';
import { CountChange } from '@project/core';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly publicationService: PublicationService
  ) {}
  public async createComment(dto: CommentDto): Promise<CommentEntity> {
    const comment = {
      ...dto,
      createCommentDate: dayjs().toDate(),
      commentAuthor: '',
    };

    const commentEntity = new CommentEntity(comment);
    this.commentRepository.save(commentEntity);

    this.publicationService.changeCommentsCount({ countChange: CountChange.Increase }, dto.publicationId);

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

    this.publicationService.changeCommentsCount({ countChange: CountChange.Decrease }, comment.publicationId);
  }

  public async getCommentsForPost(postId: string): Promise<Comment[]> {
    const commentCollection = await this.commentRepository.getCommentCollection();
    const filteredCollection = commentCollection.filter((comment) => comment.publicationId === postId);
    return filteredCollection;
  }

  public async getAllComments(): Promise<Comment[]> {
    const allComments = await this.commentRepository.getCommentCollection();
    return allComments;
  }
}
