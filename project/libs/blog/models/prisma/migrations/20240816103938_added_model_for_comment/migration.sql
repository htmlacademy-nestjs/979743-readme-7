/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastEdit_date" TIMESTAMP(3) NOT NULL,
    "post_status" TEXT NOT NULL,
    "is_reposted" BOOLEAN NOT NULL,
    "likes_count" INTEGER NOT NULL,
    "comments_count" INTEGER NOT NULL,
    "tags" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "link_description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "video_title" TEXT NOT NULL,
    "video_link" TEXT NOT NULL,
    "quote_text" TEXT NOT NULL,
    "quote_author" TEXT NOT NULL,
    "text_title" TEXT NOT NULL,
    "text_notice" TEXT NOT NULL,
    "text_content" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "commentText" TEXT NOT NULL,
    "comment_author_di" TEXT NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "posts_id_idx" ON "posts"("id");

-- CreateIndex
CREATE INDEX "comments_post_id_idx" ON "comments"("post_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
