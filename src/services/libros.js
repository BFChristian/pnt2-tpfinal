import axios from 'axios';

// const API_URL = 'https://64f8b230824680fd218f9e5f.mockapi.io/api/libros'; 
const API_URL = 'https://684b6a3b165d05c5d35c6702.mockapi.io/Libros';



export const guardarLibro = async (libro) => {
    try {
        const response = await axios.post(API_URL, libro);
        
        return response.data;
    } catch (error) {
        console.error('❌ Error al guardar el libro:', error);
        throw error;
    }
};
export const getLibros = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('Libros obtenidos:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        throw error;
    }
};

export const getLibroPorId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el libro con ID ${id}:`, error);
        throw error;
    }
};

export const crearLibro = async (nuevoLibro) => {
    try {
        const response = await axios.post(API_URL, nuevoLibro);
        return response.data;
    } catch (error) {
        console.error('Error al crear el libro:', error);
        throw error;
    }
};

export const actualizarLibro = async (id, libroActualizado) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, libroActualizado);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el libro:', error);
        throw error;
    }
};

export const eliminarLibro = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el libro:', error);
        throw error;
    }

    
};

