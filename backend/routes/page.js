import { Router } from "express";
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
