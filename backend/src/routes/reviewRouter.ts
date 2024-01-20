import express from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getAllReviewsByProductId,
  getAllReviewsByUserId,
  updateReview,
} from "../controllers/reviewController";

const router = express.Router();

router.post("/", createReview);
router.get("/", getAllReviews);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

router.get("/product/:id", getAllReviewsByProductId);
router.get("/user/:id", getAllReviewsByUserId);

export default router;
