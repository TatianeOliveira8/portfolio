import { db } from '../config/db.js';

// Pega todos os projetos do banco
export async function getProjetos() {
  const resultado = await db.query('SELECT * FROM projetos');
  const projetos = resultado[0];
  return projetos;
}

// Cria um novo projeto
export async function adicionarProjeto(dados) {
  const { titulo, descricao, imagem, cargo, link_diretorio, tecnologias } = dados;

  // Inserir projeto
  const resultado = await db.query(
    'INSERT INTO projetos (titulo, descricao, imagem, cargo, link_diretorio) VALUES (?, ?, ?, ?, ?)',
    [titulo, descricao, imagem, cargo, link_diretorio]
  );

  const idInserido = resultado[0].insertId;

  // Inserir tecnologias relacionadas (se vierem)
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

// Atualiza um projeto pelo ID
export async function editarProjeto(id, dados) {
  const { titulo, descricao, imagem, cargo, link_diretorio, tecnologias } = dados;

  // Atualizar projeto
  await db.query(
    'UPDATE projetos SET titulo = ?, descricao = ?, imagem = ?, cargo = ?, link_diretorio = ? WHERE pro_cod = ?',
    [titulo, descricao, imagem, cargo, link_diretorio, id]
  );

  // Atualizar tecnologias relacionadas
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

// Busca um projeto pelo ID
export async function getProjetoPorId(id) {
  const [resultado] = await db.query('SELECT * FROM projetos WHERE pro_cod = ?', [id]);
  return resultado[0]; // retorna só o primeiro item (ou undefined se não tiver)
}


// Deleta um projeto pelo ID
export async function deletarProjeto(id) {
  // OBS: se quiser garantir integridade, pode deletar as relações também aqui:
  await db.query('DELETE FROM projeto_tecnologia WHERE pro_cod = ?', [id]);

  await db.query('DELETE FROM projetos WHERE pro_cod = ?', [id]);
}
