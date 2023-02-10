import express from 'express';
import router from './routes/router';
import database from "./database";
import fs from 'fs';

require('dotenv').config();  
const port = process.env.PORT;

const main = async ():Promise<void> => {
  try {
    await database.sync({alter: true});
    
    const app = express();

    if (process.env.IMAGE_DIR && !fs.existsSync(process.env.IMAGE_DIR)){
      fs.mkdirSync(process.env.IMAGE_DIR, { recursive: true, mode: 0o777 });
      app.use('/images', express.static(process.env.IMAGE_DIR));
    }

    app.use(express.json({ limit: 200_000_000 }));
    app.use('/', router);

    app.listen(port, () => {
      console.log(`Success, port ${port}`)
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void main();





