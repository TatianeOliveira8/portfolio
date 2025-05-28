import { db } from '../config/db.js';

export async function getTecnologias() {
  const [tecnologias] = await db.query('SELECT * FROM tecnologias');
  return tecnologias;
}

export async function getTecnologiaPorId(id) {
  const [tecnologia] = await db.query('SELECT * FROM tecnologias WHERE tec_cod = ?', [id]);
  return tecnologia[0];
}

export async function adicionarTecnologia(dados) {
  const { nome, imagem } = dados;
  const [res] = await db.query(
    'INSERT INTO tecnologias (nome, imagem) VALUES (?, ?)',
    [nome, imagem]
  );
  return res.insertId;
}

export async function editarTecnologia(id, dados) {
  const { nome, imagem } = dados;
  await db.query(
    'UPDATE tecnologias SET nome = ?, imagem = ? WHERE tec_cod = ?',
    [nome, imagem, id]
  );
}

export async function deletarTecnologia(id) {
  await db.query('DELETE FROM tecnologias WHERE tec_cod = ?', [id]);
}
