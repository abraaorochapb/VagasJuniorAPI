import express, { Request, Response } from 'express';

const vagasRoutes = require('./routes/vagasRoutes');
const app = express();
const port = 3000;

app.use('/vagas', vagasRoutes);
app.use('/postarvaga', vagasRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());






