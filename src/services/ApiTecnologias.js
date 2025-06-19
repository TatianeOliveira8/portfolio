import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/tecnologias',
});

export const listarTecnologias = () =>
  api.get('/').then(res => res.data);

export const criarTecnologia = (dados) =>
  api.post('/', dados).then(res => res.data);

export const atualizarTecnologia = (id, dados) =>
  api.put(`/${id}`, dados);

export const deletarTecnologia = (id) =>
  api.delete(`/${id}`);
