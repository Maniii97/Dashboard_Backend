import express from "express";
import chatController from "../../controllers/chat/chat";

const router = express.Router();

router.post("/", chatController);

export default router;