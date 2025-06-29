import { buscarLibros } from '@/services/posts';
import { crearLibro } from '@/services/libros';
import { useLibroStore } from '@/stores/libros';
import { useModalStore } from '@/stores/modalStore';
import Modal from '@/components/Modal.vue'


export default {
  name: 'ABMLibros',
  components: {
    Modal,
  },
  data() {
    return {
      buscar: false,
      busqueda: "",
      librosExternos: [],
      modalStore: useModalStore(),
      librosStore: useLibroStore(),
      mensaje: '',
      mensajeTipo: ''
    };
  },
  methods: {
    async eliminarLibro(id) {
    try {
      await this.librosStore.eliminarLibroStore(id)
      this.modalStore.abrirModal(
        'Libro eliminado',
        '✅ El libro fue eliminado correctamente.',
        'success'
      )
    } catch (error) {
      console.error(error)
      this.modalStore.abrirModal(
        'Error al eliminar',
        '❌ Hubo un problema al eliminar el libro.',
        'danger'
      )
    }
  },
    async confirmarEliminacion(id) {
    this.modalStore.abrirModal(
      'Confirmar eliminación',
      '¿Estás seguro que deseas eliminar este libro?',
      'warning',
      async () => {
        await this.eliminarLibro(id)
      }
    )
  },
    async realizarBusqueda() {
  try {
    const resultado = await buscarLibros(this.busqueda);
    this.librosExternos = resultado || []; // Asegurarse que sea array
    this.buscar = true;
  } catch (error) {
    console.error(error);
    this.librosExternos = []; // También en caso de error, que no quede undefined
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
        link: info.previewLink || info.infoLink || ''

      };

      // Verificar si ya existe
      const yaExiste = this.librosStore.lista.some(libroGuardado =>
        libroGuardado.titulo === nuevoLibro.titulo &&
        libroGuardado.autor === nuevoLibro.autor
      );

      if (yaExiste) {
        this.modalStore.abrirModal(
          'Libro ya agregado',
          '❌ Este libro ya lo agregaste.',
          'danger'
        );
        return;
      }

      try {
        await this.librosStore.lista.push(nuevoLibro);
        await crearLibro(nuevoLibro);
        this.librosStore.cargarLibros(); // refrescar desde API
        this.modalStore.abrirModal(
          'Libro agregado',
          '✅ Libro agregado correctamente.',
          'success'
        );
      } catch (error) {
        console.error(error);
        this.modalStore.abrirModal(
          'Error',
          '❌ Error al importar el libro.',
          'danger'
        );
      }
    },
    cerrarMensaje() {
      this.mensaje = '';
    },
  },
  mounted() {
    this.librosStore.cargarLibros();
  },
};