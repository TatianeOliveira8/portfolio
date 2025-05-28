import express from 'express';
import * as tecnologiaController from '../controllers/tecnologiaController.js';

const router = express.Router();

router.get('/tecnologias', tecnologiaController.listarTecnologias);
router.get('/tecnologias/:id', tecnologiaController.buscarTecnologia);
router.post('/tecnologias', tecnologiaController.criarTecnologia);
router.put('/tecnologias/:id', tecnologiaController.atualizarTecnologia);
router.delete('/tecnologias/:id', tecnologiaController.deletarTecnologia);

export default router;
