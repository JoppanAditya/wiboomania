-- CreateTable
CREATE TABLE "Collections" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "anime_mal_id" STRING NOT NULL,
    "user_email" STRING NOT NULL,
    "anime_image" STRING,
    "anime_title" STRING,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "anime_mal_id" STRING NOT NULL,
    "user_email" STRING NOT NULL,
    "user_image" STRING NOT NULL,
    "comment" STRING NOT NULL,
    "username" STRING NOT NULL,
    "anime_title" STRING NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collections_user_email_anime_mal_id_key" ON "Collections"("user_email", "anime_mal_id");
