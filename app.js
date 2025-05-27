import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();


console.log('Dirname:', __dirname);

// Ton code express ici...

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

