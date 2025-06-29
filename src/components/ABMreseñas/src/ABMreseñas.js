import { useReseñaStore } from '@/stores/reseñas'


export default {
  name: 'ABMReseñas',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    async eliminarReseña(id) {
      await useReseñaStore().eliminarReseña;
    },
    async realizarBusqueda() {
      try {
        useReseñaStore() = await buscarLibros(this.busqueda);
        this.buscar = true;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.useReseñaStore.cargarReseñas();
  },
};