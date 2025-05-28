import express from 'express';
import * as certificadoController from '../controllers/certificadoController.js';

const router = express.Router();

router.get('/certificados', certificadoController.listarCertificados);
router.get('/certificados/:id', certificadoController.buscarCertificado);
router.post('/certificados', certificadoController.criarCertificado);
router.put('/certificados/:id', certificadoController.atualizarCertificado);
router.delete('/certificados/:id', certificadoController.deletarCertificado);

export default router;
