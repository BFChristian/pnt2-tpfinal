<template>
  <div class="container">
    <div class="row vh-100">
      <div class="border p-3 h-100 overflow-auto">
        <div v-for="opinion in opiniones" :key="opinion" class="mb-3">
          <h5 class="text-primary">
            {{ opinion.titulo }}
          </h5>
          <p>de</p>
          <h6 class="text-secondary">
            {{ opinion.autor }}
          </h6>
          <p>⭐ {{ opinion.rating }} / 5</p>
          <p class="mb-0">"{{ opinion.comentarios }}"</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOpiniones } from "@/services/opiniones";

export default {
  name: "opiniones",
  props: [],
  data() {
    return {
      currentIndex: 0, // Agrego esta inicialización, para que no falle al primer acceso.
      opiniones: [],
    };
  },
  mounted() {
    
  },
  methods: {
    async obtenerOpiniones() {
        try {
            getOpiniones().then((response) => {
                this.opiniones = response;
            });
        } catch (error) {
            console.error("❌ Error al obtener opiniones:", error);
        }
    },
  },
  computed: {},
  mounted() {
    this.obtenerOpiniones();
  }
};
</script>

<style scoped></style>
