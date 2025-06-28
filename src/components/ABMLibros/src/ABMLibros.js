import { buscarLibros } from '@/services/posts';
import { crearLibro } from '@/services/libros';
import { useLibroStore } from '@/stores/libros'
import Formulario from '@/components/Formulario.vue'


export default {
  name: 'ABMLibros',
  components: {
    Formulario
  },
  data() {
    return {
      buscar: false,
      busqueda: "",
      librosExternos: [],
      librosStore: useLibroStore(),
    };
  },
  methods: {
    async eliminarLibro(id) {
      await this.librosStore.eliminarLibroStore(id);
    },
    async realizarBusqueda() {
      try {
        this.librosExternos = await buscarLibros(this.busqueda);
        this.buscar = true;
      } catch (error) {
        console.error(error);
      }
    },
    async importarLibro(libro) {
      const info = libro.volumeInfo;
      const nuevoLibro = {
        titulo: info.title,
        autor: info.authors?.join(", ") || "Autor desconocido",
        descripcion: info.description || "Sin descripción",
        genero: info.categories?.[0] || "General",
        portada: info.imageLinks?.thumbnail || "",
        link: info.previewLink,
      };
      console.log(info)
      if (
        this.librosStore.lista.find(
          (libro) => libro.titulo === nuevoLibro.titulo
        )
      ) {
        alert("El libro ya existe.");
      } else {
        try {
          await crearLibro(nuevoLibro);
        } catch (e) {
          alert("Error al importar el libro.");
        }
      }
    },
  },
  mounted() {
    this.librosStore.cargarLibros();
  },
};