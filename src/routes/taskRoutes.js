import express from 'express';

import { getTasks, postTask } from '../controllers/taskControllers.js';
import { validateBody } from '../middlewares/validateBody.js';
import { post_taskSchema } from '../helpers/validationSchemas/taskSchemas.js';

const router = express.Router();

router.get('/', getTasks);

router.post(
  '/',
  (req, res, next) => validateBody(req, res, next, post_taskSchema),
  postTask,
);

export default router;
