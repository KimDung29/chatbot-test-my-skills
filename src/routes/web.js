import express from "express";
import { getHomePage, getWebhook, postWebhook } from '../controller/chatbotController'



const router = express.Router();

router.get('/', getHomePage)
router.get('/webhook', getWebhook)
router.post('/webhook', postWebhook)

export default router;