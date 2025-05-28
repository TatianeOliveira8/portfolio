import * as projetoModel from '../models/projetosmodel.js';

export async function listarProjetos(req, res) {
  try {
    const listaDeProjetos = await projetoModel.getProjetos();
    res.json(listaDeProjetos);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao listar projetos' });
  }
}

export async function criarProjeto(req, res) {
  try {
    const dadosDoProjeto = req.body;
    const novoId = await projetoModel.adicionarProjeto(dadosDoProjeto);
    res.status(201).json({ id: novoId });
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao criar projeto' });
  }
}

export async function atualizarProjeto(req, res) {
  try {
    const idDoProjeto = req.params.id;
    const dadosAtualizados = req.body;
    await projetoModel.editarProjeto(idDoProjeto, dadosAtualizados);
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao atualizar projeto' });
  }
}

export async function deletarProjeto(req, res) {
  try {
    const idDoProjeto = req.params.id;
    await projetoModel.deletarProjeto(idDoProjeto);
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao deletar projeto' });
  }
}


// buscar projetos por id mensagens de erro

export async function buscarProjeto(req, res) {
  try {
    const id = req.params.id;
    const projeto = await projetoModel.getProjetoPorId(id);

    if (!projeto) {
      return res.status(404).json({ erro: 'Projeto não encontrado' });
    }

    res.json(projeto);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar o projeto' });
  }
}
