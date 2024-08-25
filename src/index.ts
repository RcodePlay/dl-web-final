import express from 'express';
import { errorHandler } from './interface/middleware/errorHandler';
import { logger } from './infrasrtucture/logger';
import { eventRoutes } from './interface/routes/eventRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/events', eventRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

export default app;
