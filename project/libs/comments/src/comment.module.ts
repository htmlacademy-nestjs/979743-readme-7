import { Module } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentFactory } from './comment.factory';

@Module({
  imports: [],
  controllers: [],
  providers: [CommentRepository, CommentFactory],
  exports: [CommentRepository],
})
export class CommentModule {}
