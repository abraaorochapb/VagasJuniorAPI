import express, { Request, Response} from 'express';
import vagaRoutes from './Routes/vagaRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Server is up and running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());
app.use(vagaRoutes);

