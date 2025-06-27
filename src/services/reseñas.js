import datos from '../assets/reseñas.json';

export const getReseñas = async () => {
    try {
        const response = await datos;
        console.log('Reseñas obtenidos:', response);
        return response;
    } catch (error) {
        console.error('Error al obtener los Reseñas:', error);
        throw error;
    }
}

export const getReseñasPorId = async (id) => {
    try {
        const response = await datos.find(Reseña => Reseña.id === id);
        return response;
    } catch (error) {
        console.error(`Error al obtener el Reseña con ID ${id}:`, error);
        throw error;
    }
}