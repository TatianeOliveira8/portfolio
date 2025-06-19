import { db } from '../config/db.js';

export async function getProjetos() {
  const [rows] = await db.query(`
    SELECT 
      p.pro_cod AS projeto_id,
      p.titulo,
      p.descricao,
      p.imagem,
      p.cargo,
      p.link_diretorio,
      t.nome AS tecnologia_nome
    FROM projetos p
    LEFT JOIN projeto_tecnologia pt ON pt.pro_cod = p.pro_cod
    LEFT JOIN tecnologias t ON t.tec_cod = pt.tec_cod
  `);

  const projetosMap = {};

  for (const row of rows) {
    if (!projetosMap[row.projeto_id]) {
      projetosMap[row.projeto_id] = {
        id: row.projeto_id,
        titulo: row.titulo,
        descricao: row.descricao,
        imagem: row.imagem,
        cargo: row.cargo,
        link_diretorio: row.link_diretorio,
        tecnologias: [],
      };
    }

    if (row.tecnologia_nome) {
      projetosMap[row.projeto_id].tecnologias.push(row.tecnologia_nome);
    }
  }

  return Object.values(projetosMap);
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
  const [rows] = await db.query(`
    SELECT 
      p.pro_cod AS projeto_id,
      p.titulo,
      p.descricao,
      p.imagem,
      p.cargo,
      p.link_diretorio,
      t.nome AS tecnologia_nome
    FROM projetos p
    LEFT JOIN projeto_tecnologia pt ON pt.pro_cod = p.pro_cod
    LEFT JOIN tecnologias t ON t.tec_cod = pt.tec_cod
    WHERE p.pro_cod = ?
  `, [id]);

  if (rows.length === 0) return null;

  const projeto = {
    id: rows[0].projeto_id,
    titulo: rows[0].titulo,
    descricao: rows[0].descricao,
    imagem: rows[0].imagem,
    cargo: rows[0].cargo,
    link_diretorio: rows[0].link_diretorio,
    tecnologias: [],
  };

  for (const row of rows) {
    if (row.tecnologia_nome) projeto.tecnologias.push(row.tecnologia_nome);
  }

  return projeto;
}

export async function deletarProjeto(id) {
  await db.query('DELETE FROM projeto_tecnologia WHERE pro_cod = ?', [id]);

  await db.query('DELETE FROM projetos WHERE pro_cod = ?', [id]);
}
