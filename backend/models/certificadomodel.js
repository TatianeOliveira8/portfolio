import { db } from '../config/db.js';

export async function getCertificados() {
  const resultado = await db.query('SELECT * FROM certificado');
  return resultado[0];
}

export async function adicionarCertificado(dados) {
  const { nome_curso, descricao, imagem, ano_inicio, ano_conclusao, instituicao, url_certificado } = dados;

  const resultado = await db.query(
    `INSERT INTO certificado 
      (nome_curso, descricao, imagem, ano_inicio, ano_conclusao, instituicao, url_certificado) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [nome_curso, descricao, imagem, ano_inicio, ano_conclusao, instituicao, url_certificado]
  );

  return resultado[0].insertId;
}

export async function editarCertificado(id, dados) {
  const { nome_curso, descricao, imagem, ano_inicio, ano_conclusao, instituicao, url_certificado } = dados;

  await db.query(
    `UPDATE certificado SET 
       nome_curso = ?, descricao = ?, imagem = ?, ano_inicio = ?, ano_conclusao = ?, instituicao = ?, url_certificado = ? 
     WHERE cer_cod = ?`,
    [nome_curso, descricao, imagem, ano_inicio, ano_conclusao, instituicao, url_certificado, id]
  );
}

export async function deletarCertificado(id) {
  await db.query('DELETE FROM certificado WHERE cer_cod = ?', [id]);
}

export async function getCertificadoPorId(id) {
  const [resultado] = await db.query('SELECT * FROM certificado WHERE cer_cod = ?', [id]);
  return resultado[0];
}
