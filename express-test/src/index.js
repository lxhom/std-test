import express from 'express';
let app = express();
app.use((req, res, next) => {
    console.log('Requested URL: ' + req.url);
    next();
});
export default app;
