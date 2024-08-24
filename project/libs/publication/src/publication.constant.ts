import { PostStatus, SortDirection } from '@project/core';

export const PublicationResponseMessage = {
  PublicationDeleted: 'Publication has been successfully deleted.',
  PublicationFound: 'Publiation found',
  PublicationNotFound: 'Publication not found',
  PublicationCreated: 'The new publication has been successfully created.',
  PublicationEdited: 'The publication has been successfully edited.',
  PublicationDataError: 'The data is incorrect.',
} as const;

// export const MAX_POST_LIMIT = 25;

export const DEFAULT_POST_COUNT_LIMIT = 5;
export const DEFAULT_SORT_DIRECTION = SortDirection.Desc;
export const DEFAULT_PAGE_COUNT = 1;
export const DEFAULT_POST_STATUS = PostStatus.Published;
