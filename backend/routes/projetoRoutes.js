import express from 'express';
import * as projetoController from '../controllers/projetoController.js';

const router = express.Router();

router.get('/projetos', projetoController.listarProjetos);
router.get('/projetos/:id',  projetoController.buscarProjeto);
router.post('/projetos', projetoController.criarProjeto);
router.put('/projetos/:id', projetoController.atualizarProjeto);
router.delete('/projetos/:id', projetoController.deletarProjeto);

export default router;
