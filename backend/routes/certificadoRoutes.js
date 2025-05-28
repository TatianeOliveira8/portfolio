import express from 'express';
import * as certificadoController from '../controllers/certificadoController.js';

const router = express.Router();

// Lista todos os certificados
router.get('/certificados', certificadoController.listarCertificados);

// Busca um certificado pelo ID
router.get('/certificados/:id', certificadoController.buscarCertificado);

// Cria um novo certificado
router.post('/certificados', certificadoController.criarCertificado);

// Atualiza um certificado
router.put('/certificados/:id', certificadoController.atualizarCertificado);

// Deleta um certificado
router.delete('/certificados/:id', certificadoController.deletarCertificado);

export default router;
