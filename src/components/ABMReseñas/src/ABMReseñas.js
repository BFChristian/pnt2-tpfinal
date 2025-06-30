import { crearReseña } from "@/services/reseña";
import { useReseñaStore } from "@/stores/reseñas";
import Formulario from "@/components/Formulario.vue";

export default {
  name: "ABMReseñas",
  components: {
    Formulario,
  },
  data() {
    return {
      reseñaCreada: {
        id: null,
        libroTitulo: null,
        rating: null,
        comentario: null,
      },
    };
  },
  methods: {
    async eliminarReseña(id) {
      await useReseñaStore().eliminarReseñaStore(id);
    },
  },
  mounted() {
    useReseñaStore().cargarReseñas();
  },
};
