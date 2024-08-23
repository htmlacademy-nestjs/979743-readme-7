-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "originalID" TEXT,
    "type" TEXT NOT NULL,
    "authorID" TEXT NOT NULL,
    "originalAuthorID" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "post_status" TEXT NOT NULL,
    "is_reposted" BOOLEAN NOT NULL,
    "likes_count" INTEGER NOT NULL,
    "comments_count" INTEGER NOT NULL,
    "tags" TEXT,
    "link" TEXT,
    "link_description" TEXT,
    "photo" TEXT,
    "video_title" TEXT,
    "video_link" TEXT,
    "quote_text" TEXT,
    "quote_author" TEXT,
    "text_title" TEXT,
    "text_notice" TEXT,
    "text_content" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "commentText" TEXT NOT NULL,
    "comment_author_di" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "posts_id_idx" ON "posts"("id");

-- CreateIndex
CREATE INDEX "comments_post_id_idx" ON "comments"("post_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
