import axios from 'axios';

const API_URL = 'https://api.example.com/usuarios'; // Replace with your actual API URL

export const getUsuarios = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
}

export const getUsuarioPorId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el usuario con ID ${id}:`, error);
        throw error;
    }
}