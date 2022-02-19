import express from 'express';
export const app = express();

app.get('/data', (req, res) => {
    res.json({ foo: 'bar' });
});
