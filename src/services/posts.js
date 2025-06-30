import axios from 'axios';

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

export const buscarLibros = async (query) => {
    try {
        const response = await axios.get(`${GOOGLE_BOOKS_API}?q=${query}`);
        return response.data.items;
    } catch (error) {
        console.error('Error al buscar libros de Google:', error);
        throw error;
    }
};
