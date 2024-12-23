import app from './app';
import sequelize from './config/database';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT_API;

// force: true => new db every run
sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
