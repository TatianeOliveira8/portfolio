import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/certificados',
});

export const listarCertificados = () =>
  api.get('/').then((res) => res.data);

export const criarCertificado = (dados) =>
  api.post('/', dados).then((res) => res.data);

export const atualizarCertificado = (id, dados) =>
  api.put(`/${id}`, dados);

export const deletarCertificado = (id) =>
  api.delete(`/${id}`);
