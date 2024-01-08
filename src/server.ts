import express, { Request, Response} from 'express';
import vagaRoutes from './Routes/vagaRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Server is up and running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());
app.use(vagaRoutes);

