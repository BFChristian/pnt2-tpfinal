import datos from '../assets/generos.json';

export const getGeneros = async () => {
    try {
        const response = await datos;
        return response;
    } catch (error) {
        console.error('Error al obtener los generos:', error);
        throw error;
    }
}

export const getGenerosPorId = async (id) => {
    try {
        const response = await datos.find(genero => genero.id === id);
        return response;
    } catch (error) {
        console.error(`Error al obtener el genero con ID ${id}:`, error);
        throw error;
    }
}