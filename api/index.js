// index.js (backend)
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3400;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.json({ message: 'Hello, World! mini' });
  });


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

export default app;
