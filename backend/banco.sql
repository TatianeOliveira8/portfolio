CREATE TABLE certificado (
  cer_cod INT AUTO_INCREMENT PRIMARY KEY,
  nome_curso VARCHAR(100) NOT NULL,
  instituicao VARCHAR(100),
  ano_inicio YEAR,
  ano_conclusao YEAR,
  url_certificado VARCHAR(255),
  descricao TEXT,
  imagem VARCHAR(255)
);

CREATE TABLE tecnologias (
  tec_cod INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  imagem VARCHAR(255) NOT NULL
);

CREATE TABLE projetos (
  pro_cod INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  imagem VARCHAR(255) NOT NULL,
  cargo VARCHAR(100) NOT NULL,
  link_diretorio VARCHAR(255) NOT NULL
);

CREATE TABLE projeto_tecnologia (
  pro_cod INT,
  tec_cod INT,
  PRIMARY KEY (pro_cod, tec_cod),
  FOREIGN KEY (pro_cod) REFERENCES projetos(pro_cod),
  FOREIGN KEY (tec_cod) REFERENCES tecnologias(tec_cod)
);

CREATE TABLE dados_pessoais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  github VARCHAR(255),
  linkedin VARCHAR(255),
  objetivo TEXT
);


-- testes 
SELECT * FROM dados_pessoais;
