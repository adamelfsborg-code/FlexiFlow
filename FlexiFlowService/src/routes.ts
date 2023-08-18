import { publishToTopic, subscribeToTopic } from './EventBus';
import express, { Request, Response } from 'express';

const router = express.Router();

// Subscribe to a topic
router.get('/subscribe/:topic', (req: Request, res: Response) => {
    const { topic } = req.params;
    subscribeToTopic(topic);
    res.send(`Subscribed to topic: ${topic}`);
});
  
// Publish to a topic
router.post('/publish/:topic', (req: Request, res: Response) => {
    const { topic } = req.params;
    const eventData = req.body;
    publishToTopic(topic, eventData);
    res.send(`Published to topic: ${topic}`);
});

export default router;