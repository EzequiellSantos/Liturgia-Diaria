const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api-liturgia-diaria.vercel.app/');
        res.json(response.data);
        console.log(res)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
