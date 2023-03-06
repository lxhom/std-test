import express from 'express';

let app = express();
app.use((req: any, res: any, next: any) => {
    console.log('Requested URL: ' + req.url);
    next();
})

export default app;
