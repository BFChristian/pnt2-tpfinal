import axios from "axios";
import { ENV_VARIABLES } from "../../config";

const API_URL = `https://${ENV_VARIABLES.API_KEY}.mockapi.io/opiniones`;

export const guardarOpinion = async (opinion) => {
  try {
    const response = await axios.post(API_URL, opinion);
    return response.data;
  } catch (error) {
    console.error("❌ Error al guardar la opinión:", error);
    throw error;
  }
};

export const getOpiniones = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las opiniones:", error);
    throw error;
  }
};
export const getOpinionPorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la opinión con ID ${id}:`, error);
    throw error;
  }
};
export const actualizarOpinion = async (id, opinionActualizada) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, opinionActualizada);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la opinión:", error);
    throw error;
  }
};

export const eliminarOpinion = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la opinión:", error);
    throw error;
  }
};