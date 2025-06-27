<template>
  <div class="container">
    <div class="row vh-100">
      <div class="border p-3 h-100 overflow-auto">
        <div v-for="(reseña, index) in reseñas" :key="index" class="mb-3">
          <h5>
            <!--  por ahora esto muestra solo el id del libro y el usuario  -->
            <p class="text-muted">{{ buscarLibroPorId(reseña.libroId) }}</p>
          </h5>
          <p>⭐ {{ reseña.rating }} / 5</p>
          <p class="mb-0">"{{ reseña.comentarios }}"</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReseñas } from "@/services/reseñas";
import { getLibros } from "@/services/libros";

export default {
  name: "opiniones",
  props: [],
  data() {
    return {
      reseñas: [],
      libros: [],
    };
  },
  mounted() {
    getReseñas().then((response) => {
      this.reseñas = response;
      this.currentIndex = 0;
    }),
      getLibros().then((response) => {
        this.libros = response;
      });
    setInterval(() => {
      if (this.reseñas)
        this.currentIndex = (this.currentIndex + 1) % this.reseñas.lenght;
    }, 3000);
  },
  methods: {},
  computed: {
    buscarLibroPorId() {
      return (id) => {
        const libro = this.libros.find((libro) => libro.id === id);
        return libro ? libro.titulo : "Libro no encontrado";
      };
    },
  },
};
</script>

<style scoped></style>
