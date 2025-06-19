import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/projetos',
});

export const listarProjetos = () =>
  api.get('/').then((res) => res.data);

export const criarProjeto = (dados) =>
  api.post('/', dados).then((res) => res.data);

export const atualizarProjeto = (id, dados) =>
  api.put(`/${id}`, dados);

export const deletarProjeto = (id) =>
  api.delete(`/${id}`);


// ...existing code...

// Adicione esta função para vincular tecnologias
export const vincularTecnologias = async (projetoId, tecnologiasIds) => {
  try {
    const response = await api.post(`/api/Projetos/${projetoId}/tecnologias`, tecnologiasIds);
    return response.data;
  } catch (error) {
    throw error;
  }
};