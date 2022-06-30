import { scoreBoardRoutes } from './scoreboard.routes';
import { Router } from 'express';

export const router = Router();

router.use('/scoreboards', scoreBoardRoutes);
