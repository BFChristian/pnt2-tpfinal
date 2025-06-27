<template>
  <div class="container">
    <div class="row overflow-auto">
      <div class="col-md-4 mb-4" v-for="libro in getLibros" :key="libro.id">
        <Card
          :libroData="buscarLibro(libro.id)"
          :autorData="buscarAutor(libro.autorId)"
          :generoData="buscarGenero(libro.generoId)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useLibros } from "@/store/libros";
import { getAutoresPorId } from "@/services/autores";
import { getGenerosPorId } from "@/services/generos";
import Card from "./Card.vue";

export default {
  name: "catalogo",
  components: {
    Card,
  },
  props: [],
  data() {
    return {};
  },
  computed: {
    getLibros() {
      return useLibros().libros;
    },
  },
  methods: {
    buscarAutor(id) {
      return getAutoresPorId(id);
    },
    buscarGenero(id) {
      return getGenerosPorId(id);
    },
    buscarLibro(id) {
      return useLibros().libros.find((libro) => libro.id === id);
    },
  },
  mounted() {
    useLibros()
      .cargarLibros()
      .catch((error) => {
        console.error("Error al cargar los libros:", error);
      });
  },
};
</script>

<style scoped></style>
