import { Transform } from 'class-transformer';
import { IsArray, IsIn, IsMongoId, IsNumber, IsOptional, IsUUID } from 'class-validator';

import { PostStatus, PostType, SortDirection } from '@project/core';

import { DEFAULT_POST_COUNT_LIMIT, DEFAULT_SORT_DIRECTION, DEFAULT_PAGE_COUNT } from './publication.constant';

export class PublicationQuery {
  @Transform(({ value }) => +value || DEFAULT_POST_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_POST_COUNT_LIMIT;

  @IsIn(Object.values(SortDirection))
  @IsOptional()
  public sortDirection: SortDirection = DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => +value || DEFAULT_PAGE_COUNT)
  @IsOptional()
  public page: number = DEFAULT_PAGE_COUNT;

  @IsIn(Object.values(PostType))
  @IsOptional()
  public type?: string;

  @IsMongoId()
  @IsOptional()
  public authorID?: string;

  @IsIn(Object.values(PostStatus))
  @IsOptional()
  public postStatus?: string;
}
