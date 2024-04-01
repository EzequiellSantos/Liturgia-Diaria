import express from 'express';
import cors from 'cors';
import { get } from 'axios';

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const response = await get('https://api-liturgia-diaria.vercel.app/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
