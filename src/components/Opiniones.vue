<template>
  <div class="container">
    <div class="row vh-100">
      <div class="border p-3 h-100 overflow-auto">
        <div v-for="(reseña, index) in reseñas" :key="index" class="mb-3">
          <h5>
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
import { useLibros } from "@/store/libros"

export default {
  name: "opiniones",
  props: [],
  data() {
    return {
      reseñas: [],
    };
  },
  mounted() {
    getReseñas().then((response) => {
      this.reseñas = response;
      this.currentIndex = 0;
    }),
      setInterval(() => {
        if (this.reseñas)
          this.currentIndex = (this.currentIndex + 1) % this.reseñas.lenght;
      }, 3000);
  },
  methods: {
    buscarLibroPorId(libroId) {
      return useLibros().libros.find((libro) => libro.id === libroId)?.titulo || "Libro no encontrado";
    },
  },
  computed: {},
};
</script>

<style scoped></style>
