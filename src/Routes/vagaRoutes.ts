import express from 'express';
import * as vagaController from '../Controllers/vagaController';

const router = express.Router();

router.get('/vagas', vagaController.getAllVagas);
router.post('/postarvaga', vagaController.createVaga);
router.get('/vagas/setor', vagaController.getVagasBySetor);
router.delete('/deletarvaga/:id', vagaController.deleteVaga);
router.put('/atualizarvaga', vagaController.updateVaga);

export default router;
