import { buscarLibros } from '@/services/posts';
import { crearLibro } from '@/services/libros';
import { useLibroStore } from '@/stores/libros'


export default {
  name: 'ABMLibros',
  data() {
    return {
      busqueda: '',
       librosExternos: [],
      librosStore: useLibroStore()
    };
  },
  methods: {
    async realizarBusqueda() {
      try {
        this.librosExternos = await buscarLibros(this.busqueda);
      } catch (error) {
        console.error(error);
      }
    },
    async importarLibro(libro) {
      const info = libro.volumeInfo;
      const nuevoLibro = {
        titulo: info.title,
        autor: info.authors?.join(', ') || 'Autor desconocido',
        descripcion: info.description || 'Sin descripción',
        genero: info.categories?.[0] || 'General',
        portada: info.imageLinks?.thumbnail || '',
        pdf: ''
      };
      try {
        await crearLibro(nuevoLibro);
        alert('Libro importado a MockAPI correctamente.');
      } catch (error) {
        alert('Error al importar el libro.');
      }
    }
  },
  mounted() {
    this.librosStore.cargarLibros()
  },
};