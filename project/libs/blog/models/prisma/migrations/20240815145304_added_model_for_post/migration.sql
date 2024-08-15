-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastEditDate" TIMESTAMP(3) NOT NULL,
    "postStatus" TEXT NOT NULL,
    "isReposted" BOOLEAN NOT NULL,
    "likesCount" INTEGER NOT NULL,
    "commentsCount" INTEGER NOT NULL,
    "tags" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "linkDescription" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "videoTitle" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "quoteText" TEXT NOT NULL,
    "quoteAuthor" TEXT NOT NULL,
    "textTitle" TEXT NOT NULL,
    "textNotice" TEXT NOT NULL,
    "textContent" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_id_author_createDate_idx" ON "Post"("id", "author", "createDate");
