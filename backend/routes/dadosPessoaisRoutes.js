import express from 'express';
import * as dadosPessoaisController from '../controllers/dadosPessoaisController.js';

const router = express.Router();

router.get('/dados-pessoais', dadosPessoaisController.listarDadosPessoais);
router.post('/dados-pessoais', dadosPessoaisController.criarDadosPessoais);
router.put('/dados-pessoais/:id', dadosPessoaisController.atualizarDadosPessoais);
router.delete('/dados-pessoais/:id', dadosPessoaisController.deletarDadosPessoais);

export default router;
