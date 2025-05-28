import * as dadosPessoaisModel from '../models/dadosPessoaismodel.js';

export async function listarDadosPessoais(req, res) {
  try {
    const dados = await dadosPessoaisModel.getDadosPessoais();
    if (!dados) return res.status(404).json({ error: 'Dados pessoais não encontrados' });
    res.json(dados);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao listar dados pessoais' });
  }
}

export async function criarDadosPessoais(req, res) {
  try {
    const dados = req.body;
    const novoId = await dadosPessoaisModel.adicionarDadosPessoais(dados);
    res.status(201).json({ id: novoId });
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao criar dados pessoais' });
  }
}

export async function atualizarDadosPessoais(req, res) {
  try {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    await dadosPessoaisModel.editarDadosPessoais(id, dadosAtualizados);
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao atualizar dados pessoais' });
  }
}

export async function deletarDadosPessoais(req, res) {
  try {
    const id = req.params.id;
    await dadosPessoaisModel.deletarDadosPessoais(id);
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao deletar dados pessoais' });
  }
}
