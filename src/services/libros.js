import axios from 'axios';

const API_URL = 'https://api.example.com/libros'; // Replace with your actual API URL

export const getLibros = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        throw error;
    }
}

export const getLibroPorId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el libro con ID ${id}:`, error);
        throw error;
    }
}