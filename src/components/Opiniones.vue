<template>
  <div class="container">
    <div class="row vh-100">
      <div class="border p-3 h-100 overflow-auto">
       
        <div v-for="opinion in opiniones" :key="opinion" class="mb-3">
        
          <h5 class="text-primary">
            {{ opinion.titulo }}
          </h5>
          
          <p class="text-secondary">Reseña hecha por</p>
          <h6 class="text-primary">
            {{ opinion.autor }}
          </h6>
          
          <p>⭐ {{ opinion.rating }} / 5</p>
          <p class="mb-0 overflow-auto">"{{ opinion.comentarios.slice(0, 120).trim() }}"</p>
          <hr />
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import { useOpinionStore } from "@/stores/opiniones";

export default {
  name: "opiniones",
  props: [],
  data() {
    return {
      currentIndex: 0, 
      
    };
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
  computed: {
    opiniones() {
      return useOpinionStore().lista;
    },
  },
  mounted() {
    useOpinionStore().cargarOpiniones();
  }
};
</script>

<style scoped></style>
