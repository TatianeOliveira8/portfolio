import * as tecnologiaModel from '../models/tecnologiamodel.js';

// Listar todas
export async function listarTecnologias(req, res) {
  try {
    const lista = await tecnologiaModel.getTecnologias();
    res.json(lista);
  } catch {
    res.status(500).json({ error: 'Erro ao listar tecnologias' });
  }
}

// Buscar uma
export async function buscarTecnologia(req, res) {
  try {
    const id = req.params.id;
    const tecnologia = await tecnologiaModel.getTecnologiaPorId(id);

    if (!tecnologia) {
      return res.status(404).json({ error: 'Tecnologia não encontrada' });
    }

    res.json(tecnologia);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar tecnologia' });
  }
}

// Criar
export async function criarTecnologia(req, res) {
  try {
    const novaTec = req.body;
    const id = await tecnologiaModel.adicionarTecnologia(novaTec);
    res.status(201).json({ id });
  } catch {
    res.status(500).json({ error: 'Erro ao criar tecnologia' });
  }
}

// Atualizar
export async function atualizarTecnologia(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;
    await tecnologiaModel.editarTecnologia(id, dados);
    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Erro ao atualizar tecnologia' });
  }
}

// Deletar
export async function deletarTecnologia(req, res) {
  try {
    const id = req.params.id;
    await tecnologiaModel.deletarTecnologia(id);
    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Erro ao deletar tecnologia' });
  }
}
