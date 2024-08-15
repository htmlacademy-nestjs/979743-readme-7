/*
  Warnings:

  - You are about to drop the column `commentsCount` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createDate` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `isReposted` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `lastEditDate` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likesCount` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `linkDescription` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postStatus` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `quoteAuthor` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `quoteText` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `textContent` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `textNotice` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `textTitle` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `videoLink` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `videoTitle` on the `Post` table. All the data in the column will be lost.
  - Added the required column `comments_count` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_reposted` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastEdit_date` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes_count` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_description` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_status` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quote_author` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quote_text` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text_content` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text_notice` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text_title` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video_link` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video_title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_id_author_createDate_idx";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "commentsCount",
DROP COLUMN "createDate",
DROP COLUMN "isReposted",
DROP COLUMN "lastEditDate",
DROP COLUMN "likesCount",
DROP COLUMN "linkDescription",
DROP COLUMN "postStatus",
DROP COLUMN "quoteAuthor",
DROP COLUMN "quoteText",
DROP COLUMN "textContent",
DROP COLUMN "textNotice",
DROP COLUMN "textTitle",
DROP COLUMN "videoLink",
DROP COLUMN "videoTitle",
ADD COLUMN     "comments_count" INTEGER NOT NULL,
ADD COLUMN     "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_reposted" BOOLEAN NOT NULL,
ADD COLUMN     "lastEdit_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "likes_count" INTEGER NOT NULL,
ADD COLUMN     "link_description" TEXT NOT NULL,
ADD COLUMN     "post_status" TEXT NOT NULL,
ADD COLUMN     "quote_author" TEXT NOT NULL,
ADD COLUMN     "quote_text" TEXT NOT NULL,
ADD COLUMN     "text_content" TEXT NOT NULL,
ADD COLUMN     "text_notice" TEXT NOT NULL,
ADD COLUMN     "text_title" TEXT NOT NULL,
ADD COLUMN     "video_link" TEXT NOT NULL,
ADD COLUMN     "video_title" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Post_id_author_create_date_idx" ON "Post"("id", "author", "create_date");
