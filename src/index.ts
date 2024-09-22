import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import { errorHandler } from './interface/middleware/errorHandler.js';
import { logger } from './infrasrtucture/logger.js';
import { eventRoutes } from './interface/routes/eventRoutes.js';
import { setupSwagger } from './interface/swagger.js';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/events', eventRoutes, cors());
app.use(cors({ origin: 'http://localhost:4200/' }));
setupSwagger(app);

const PORT = process.env.PORT as unknown as number | 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

export default app;
