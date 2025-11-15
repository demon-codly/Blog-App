import express from 'express';
import { getUserSavedPosts, savePost } from '../controllers/user.controller.js';
import { requireAuth } from '@clerk/clerk-sdk-node';

const router = express.Router();

router.get("/saved", getUserSavedPosts)
router.patch("/save", savePost)

export default router;