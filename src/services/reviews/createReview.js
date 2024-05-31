import { PrismaClient } from "@prisma/client";

const createReview = async (id, rating, comment, property, user) => {
  const newReview = {
    id,
    rating,
    comment,
    property,
    user,
  };

  const prisma = new PrismaClient();
  const review = await prisma.review.create({
    data: newReview,
  });

  return review;
};

export default createReview;
