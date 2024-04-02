const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://api-liturgia-diaria.vercel.app/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os dados' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
