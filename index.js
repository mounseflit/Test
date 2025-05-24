
import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import e from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();


app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Load environment variables
dotenv.config();



// CORS middleware
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Serve static files
app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
