import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

export const getAllVagas = async (req: Request, res: Response) => {
    const vagas = await prisma.vaga.findMany();
    return res.json(vagas);
};

export const createVaga = async (req: Request, res: Response) => {
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
};

export const getVagasBySetor = async (req: Request, res: Response) => {
    const setor = req.query.setor as string;

    if (!setor) {
      return res.status(400).json({ error: 'O parâmetro setor é obrigatório.' });
    }
  
    const vagas = await prisma.vaga.findMany({
      where: {
        setor: {
          contains: setor,
          mode: 'insensitive',
        }
      }
    });
  
    return res.json(vagas);
};

export const deleteVaga = async (req: Request, res: Response) => {
    const { id } = req.body;
    await prisma.vaga.delete({
      where: {
        id: String(id),
      },
    });
    return res.status(204).send();
}

export const updateVaga = async (req: Request, res: Response) => {
    const { id } = req.params;
    const createVagaSchema = z.object({
      titulo: z.string(),
      descricao: z.string(),
      setor: z.string(),
    })
  const {titulo, descricao, setor} = createVagaSchema.parse(req.body)
    await prisma.vaga.update({
      where: {
        id: String(id),
      },
      data: {
        titulo,
        descricao,
        setor
      },
    });
    return res.status(204).send();
}