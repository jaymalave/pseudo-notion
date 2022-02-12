import { Router } from "express";
import Page from "../models/Page.js";
import User from "../models/User.js";
import { newPage, updatePage } from "../utils/validation.js";
import mongoose from "mongoose";
import {
  newPageController,
  getSpecificPage,
  getAllPages,
  updatePageController,
} from "../controllers/pageController.js";

const router = Router();

router.post("/new", newPageController);

// get specific page
router.get("/get/:pageId", getSpecificPage);

// get all user's pages
router.get("/get", getAllPages);

// update page
router.post("/update/:pageId", updatePageController);

export default router;
