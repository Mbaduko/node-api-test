import express from 'express';

const app = express();

app.get('/', ( req, res, next ) => {
    res.status(200).semd('Welcome to twaje revolution');
});

export default app;