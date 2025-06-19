import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/dados-pessoais',
});

export const listarDadosPessoais = () =>
  api.get('/').then(res => res.data);

export const criarDadosPessoais = (dados) =>
  api.post('/', dados).then(res => res.data);

export const atualizarDadosPessoais = (id, dados) =>
  api.put(`/${id}`, dados);

export const deletarDadosPessoais = (id) =>
  api.delete(`/${id}`);
