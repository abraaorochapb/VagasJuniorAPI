import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { Request, Response} from 'express';

const prisma = new PrismaClient();
const Router = require('express').Router();


Router.get('/vagas', async (req: Request, res: Response) => {
    const vagas = await prisma.vaga.findMany();
})

Router.post('/postarvaga', async (req: Request, res: Response) => {
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

module.exports = Router