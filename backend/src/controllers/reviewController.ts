import { Request, Response } from "express";
import { ReviewModel } from "../models/reviewModel";

const createReview = async (req: Request, res: Response) => {
  try {
    await ReviewModel.create(req.body);
    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the review " + error });
  }
};

const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await ReviewModel.getAll();
    if (reviews.length <= 0) {
      res.status(404).json({ message: "Reviews not found" });
      return;
    }
    res.status(200).json({ message: "Reviews found!", data: reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching reviews " + error });
  }
};

const getAllReviewsByProductId = async (req: Request, res: Response) => {
  try {
    const review = await ReviewModel.getAllByProductId(parseInt(req.params.id));
    if (review.length <= 0) {
      res.status(404).json({ message: "Review not found" });
      return;
    }
    res.status(200).json({ message: "Review found!", data: review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the review " + error });
  }
};

const getAllReviewsByUserId = async (req: Request, res: Response) => {
  try {
    const review = await ReviewModel.getAllByUserId(parseInt(req.params.id));
    if (review.length <= 0) {
      res.status(404).json({ message: "Review not found" });
      return;
    }
    res.status(200).json({ message: "Review found!", data: review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the review " + error });
  }
};

const updateReview = async (req: Request, res: Response) => {
  try {
    await ReviewModel.update(parseInt(req.params.id), req.body);
    res.status(200).json({ message: "Review updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the review " + error });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  try {
    await ReviewModel.delete(parseInt(req.params.id));
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the review " + error });
  }
};

export {
  createReview,
  getAllReviews,
  getAllReviewsByProductId,
  getAllReviewsByUserId,
  updateReview,
  deleteReview,
};
