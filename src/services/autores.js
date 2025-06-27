import datos from '../assets/autores.json';

export const getAutores = async () => {
    try {
        const response = await datos;
        return response;
    } catch (error) {
        console.error('Error al obtener los autores:', error);
        throw error;
    }
}

export const getAutoresPorId = async (id) => {
    try {
        const response = await datos.find(autor => autor.id === id);
        return response;
    } catch (error) {
        console.error(`Error al obtener el autor con ID ${id}:`, error);
        throw error;
    }
}