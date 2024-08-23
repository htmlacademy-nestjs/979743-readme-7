import { Prisma } from '@prisma/client';

export interface PostFilter {
  id?: string;
  type?: string;
}

export function postFilterToPrismaFilter(filter: PostFilter): Prisma.PostWhereInput | undefined {
  if (!filter) {
    return undefined;
  }

  let prismaFilter: Prisma.PostWhereInput = {};

  if (filter.type) {
    prismaFilter = { type: filter.type };
  }

  return prismaFilter;
}
