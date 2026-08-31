import express from "express";
import { addReviews, getreviws } from "../controllers/reviewControllers.js";

const reviewRouter=express.Router()

reviewRouter.post("/add",addReviews)
reviewRouter.get("/get",getreviws)

export default reviewRouter