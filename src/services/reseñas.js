import axios from "axios";

const RESEÑAS = "./assets/reseñas.json";

export const crearReseña = async (reseña) => {
  try {
    const response = await axios.post(RESEÑAS, reseña);
    return response.data;
  } catch (error) {
    console.error("❌ Error al guardar la reseña:", error);
    throw error;
  }
};
export const getReseñas = async () => {
  try {
    const response = await axios.get(RESEÑAS);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las reseñas:", error);
    throw error;
  }
};

export const getReseñaPorId = async (id) => {
  try {
    const response = await axios.get(`${RESEÑAS}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el libro con ID ${id}:`, error);
    throw error;
  }
};

export const actualizarReseña = async (id, reseñaActualizada) => {
  try {
    const response = await axios.put(`${RESEÑAS}/${id}`, reseñaActualizada);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    throw error;
  }
};

export const eliminarReseña = async (id) => {
  try {
    const response = await axios.delete(`${RESEÑAS}/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el libro:", error);
    throw error;
  }
};
