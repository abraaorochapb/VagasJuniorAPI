import express, { Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
  res.send('Server is up and running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());

app.get('/vagas', async (req: Request, res: Response) => {
    const vagas = await prisma.vaga.findMany();
    return res.json(vagas)
})

app.post('/postarvaga', async (req: Request, res: Response) => {
    const createVagaSchema = z.object({
        titulo: z.string(),
        descricao: z.string(),
        setor: z.string(),
    })
    const {titulo, descricao, setor} = createVagaSchema.parse(req.body)
    await prisma.vaga.create({
        data: {
        titulo,
        descricao, 
        setor
        }
    })
    return res.status(201).send()
})

app.get('/vagas/setor', async (req: Request, res: Response) => {
  const vagas = await prisma.vaga.findMany({
    where: {
      setor: req.query.setor as string 
    }
  });
  return res.json(vagas);
});