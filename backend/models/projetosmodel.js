import { db } from '../config/db.js';

export async function getProjetos() {
  const resultado = await db.query('SELECT * FROM projetos');
  const projetos = resultado[0];
  return projetos;
}

export async function adicionarProjeto(dados) {
  const { titulo, descricao, imagem, cargo, link_diretorio, tecnologias } = dados;

  const resultado = await db.query(
    'INSERT INTO projetos (titulo, descricao, imagem, cargo, link_diretorio) VALUES (?, ?, ?, ?, ?)',
    [titulo, descricao, imagem, cargo, link_diretorio]
  );

  const idInserido = resultado[0].insertId;

  if (Array.isArray(tecnologias)) {
    for (const tec_cod of tecnologias) {
      await db.query(
        'INSERT INTO projeto_tecnologia (pro_cod, tec_cod) VALUES (?, ?)',
        [idInserido, tec_cod]
      );
    }
  }

  return idInserido;
}

export async function editarProjeto(id, dados) {
  const { titulo, descricao, imagem, cargo, link_diretorio, tecnologias } = dados;

  await db.query(
    'UPDATE projetos SET titulo = ?, descricao = ?, imagem = ?, cargo = ?, link_diretorio = ? WHERE pro_cod = ?',
    [titulo, descricao, imagem, cargo, link_diretorio, id]
  );

  await db.query('DELETE FROM projeto_tecnologia WHERE pro_cod = ?', [id]);

  if (Array.isArray(tecnologias)) {
    for (const tec_cod of tecnologias) {
      await db.query(
        'INSERT INTO projeto_tecnologia (pro_cod, tec_cod) VALUES (?, ?)',
        [id, tec_cod]
      );
    }
  }
}

export async function getProjetoPorId(id) {
  const [resultado] = await db.query('SELECT * FROM projetos WHERE pro_cod = ?', [id]);
  return resultado[0]; 
}

export async function deletarProjeto(id) {
  await db.query('DELETE FROM projeto_tecnologia WHERE pro_cod = ?', [id]);

  await db.query('DELETE FROM projetos WHERE pro_cod = ?', [id]);
}
