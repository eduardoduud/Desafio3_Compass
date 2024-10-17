-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "sku" VARCHAR(10) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "largeDescription" VARCHAR(500) NOT NULL,
    "price" DECIMAL NOT NULL,
    "discountPrice" DECIMAL,
    "discountPercent" INTEGER,
    "isNew" BOOLEAN NOT NULL,
    "imageLink" VARCHAR(250),
    "otherImagesLink" VARCHAR(1000),
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "imageLink" VARCHAR(250),
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
