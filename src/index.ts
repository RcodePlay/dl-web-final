import express from 'express';
import dotenv from 'dotenv';
import { eventRoutes } from './interface/routes/eventRoutes';
import { errorHandler } from './interface/middleware/errorHandler';
import { logger } from './infrastructure/logger';
dotenv.config();

const app = express();

app.use(express.json());
app.use('/', eventRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
