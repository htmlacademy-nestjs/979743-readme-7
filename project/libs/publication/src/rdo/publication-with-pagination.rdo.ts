import { Expose } from 'class-transformer';
import { PublicationRdo } from './publication.rdo';

export class PublicationWithPaginationRdo {
  @Expose()
  public entities: PublicationRdo[];

  @Expose()
  public totalPages: number;

  @Expose()
  public totalItems: number;

  @Expose()
  public currentPage: number;

  @Expose()
  public itemsPerPage: number;
}
