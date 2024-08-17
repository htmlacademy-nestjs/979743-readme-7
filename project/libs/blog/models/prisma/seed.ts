import { PrismaClient } from '@prisma/client';

const FIRST_POST_UUID = '6d308040-96a2-4162-bea6-2338e9976540';
const SECOND_POST_UUID = 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd';

const FIRST_USER_ID = '658170cbb954e9f5b905ccf4';
const SECOND_USER_ID = '6581762309c030b503e30512';

function getPosts() {
  return [
    {
      id: FIRST_POST_UUID,
      type: 'video',
      author: FIRST_USER_ID,
      // createDate: '2024-08-15T00:00:00Z',
      // lastEditDate: '2024-08-16',
      postStatus: 'published',
      isReposted: false,
      likesCount: 0,
      commentsCount: 0,
      tags: '',
      link: '',
      linkDescription: '',
      photo: '',
      videoTitle: 'Мега крутой видос',
      videoLink: 'где-то на youtub',
      quoteText: '',
      quoteAuthor: '',
      textTitle: '',
      textNotice: '',
      textContent: '',
      comments: [],
    },
    {
      id: SECOND_POST_UUID,
      type: 'photo',
      author: SECOND_USER_ID,
      // createDate: '2024-08-12T00:00:00Z',
      // lastEditDate: '2024-08-18',
      postStatus: 'published',
      isReposted: true,
      likesCount: 12,
      commentsCount: 2,
      tags: '#fvdf, #dfkvdl, #dlfkvdf',
      link: '',
      linkDescription: '',
      photo: 'Очень редкая фотка',
      videoTitle: '',
      videoLink: '',
      quoteText: '',
      quoteAuthor: '',
      textTitle: '',
      textNotice: '',
      textContent: '',
      comments: [
        {
          // publicationId: SECOND_POST_UUID,
          commentText: 'Это действительно отличная фотка!',
          commentAuthorId: FIRST_USER_ID,
          // createCommentDate: '2024-08-13',
        },
        {
          // publicationId: SECOND_POST_UUID,
          commentText: 'Ничего особенного',
          commentAuthorId: SECOND_USER_ID,
          // createCommentDate: '2024-08-14',
        },
      ],
    },
  ];
}

async function seedDb(prismaClient: PrismaClient) {
  const mockPosts = getPosts();
  for (const post of mockPosts) {
    await prismaClient.post.create({
      data: {
        // id: post.id,
        type: post.type,
        author: post.author,
        // createDate: post.createDate,
        postStatus: post.postStatus,
        isReposted: post.isReposted,
        likesCount: post.likesCount,
        commentsCount: post.commentsCount,
        tags: post.tags,
        link: post.link,
        linkDescription: post.linkDescription,
        photo: post.photo,
        videoTitle: post.videoTitle,
        videoLink: post.videoLink,
        quoteText: post.quoteText,
        quoteAuthor: post.quoteAuthor,
        textTitle: post.textTitle,
        textNotice: post.textNotice,
        textContent: post.textContent,
        comments: post.comments
          ? {
              create: post.comments,
            }
          : undefined,
      },
    });
  }

  console.info('🤘️ Database was filled');
}

async function bootstrap() {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
