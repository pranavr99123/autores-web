import express from 'express';
import { readFileSync } from 'fs';
const app = express();
const PORT = process.env.PORT || 3000;
const html = readFileSync('./index.html', 'utf8');
app.get('*', (req, res) => { res.setHeader('Content-Type', 'text/html'); res.send(html); });
app.listen(PORT, () => console.log('AutoRes web app on :' + PORT));
