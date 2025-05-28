import { db } from '../config/db.js';

export async function getDadosPessoais() {
  const [resultado] = await db.query('SELECT * FROM dados_pessoais LIMIT 1');
  return resultado[0]; 
}

export async function adicionarDadosPessoais(dados) {
  const { nome, email, telefone, github, linkedin, objetivo } = dados;
  const [resultado] = await db.query(
    `INSERT INTO dados_pessoais 
     (nome, email, telefone, github, linkedin, objetivo)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nome, email, telefone, github, linkedin, objetivo]
  );
  return resultado.insertId;
}

export async function editarDadosPessoais(id, dados) {
  const { nome, email, telefone, github, linkedin, objetivo } = dados;
  await db.query(
    `UPDATE dados_pessoais SET
     nome = ?, email = ?, telefone = ?, github = ?, linkedin = ?, objetivo = ?
     WHERE id = ?`,
    [nome, email, telefone, github, linkedin, objetivo, id]
  );
}

export async function deletarDadosPessoais(id) {
  await db.query('DELETE FROM dados_pessoais WHERE id = ?', [id]);
}
