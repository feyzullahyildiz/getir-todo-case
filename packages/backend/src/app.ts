import express from 'express';
export const app = express();

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.json({});
    }
    next();
});
app.get('/data', (req, res) => {
    res.json({ foo: 'bar' });
});
