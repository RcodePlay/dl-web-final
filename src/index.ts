import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { errorHandler } from './interface/middleware/errorHandler.js';
import { logger } from './infrasrtucture/logger.js';
import { eventRoutes } from './interface/routes/eventRoutes.js';
import { setupSwagger } from './interface/swagger.js';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/events', eventRoutes);
setupSwagger(app);

const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

export default app;
