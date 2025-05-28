import * as certificadoModel from '../models/certificadomodel.js';

export async function listarCertificados(req, res) {
  try {
    const certificados = await certificadoModel.getCertificados();
    res.json(certificados);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar os certificados' });
  }
}

export async function criarCertificado(req, res) {
  console.log('Recebido no body:', req.body);

  try {
    const dados = req.body;
    const novoId = await certificadoModel.adicionarCertificado(dados);
    res.status(201).json({ id: novoId });
  } catch (erro) {
    console.error('Erro ao criar certificado:', erro);
    res.status(500).json({ erro: 'Erro ao criar certificado' });
  }
}

export async function atualizarCertificado(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;
    await certificadoModel.editarCertificado(id, dados);
    res.status(204).send(); 
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar certificado' });
  }
}

export async function deletarCertificado(req, res) {
  try {
    const id = req.params.id;
    await certificadoModel.deletarCertificado(id);
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao deletar certificado' });
  }
}

export async function buscarCertificado(req, res) {
  try {
    const id = req.params.id;
    const certificado = await certificadoModel.getCertificadoPorId(id);

    if (!certificado) {
      return res.status(404).json({ erro: 'Certificado não encontrado' });
    }

    res.json(certificado);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar o certificado' });
  }
}
