<template>
  <div class="container">
    <div class="row overflow-auto">
      <div
        class="col-md-4 mb-4"
        v-for="libro in librosFiltrados"
        :key="libro.id"
      >

        <Card :libroData="libro" />
      </div>
      <div v-if="librosFiltrados.length === 0" class="alert alert-warning w-100">
  ⚠️ No hay libros que coincidan con los filtros de búsqueda.
     </div>

    </div>
  </div>
</template>

<script>
import { getLibros } from "@/services/libros";
import { useFiltroStore } from "@/stores/filtros";
import { storeToRefs } from "pinia";
import Card from "./Card.vue";

export default {
  name: "catalogo",
  components: {
    Card,
  },
  data() {
    return {
      libros: [],
      filtroStore: useFiltroStore(),
    };
  },
  computed: {
    titulo() {
      return storeToRefs(this.filtroStore).titulo.value;
    },
    autor() {
      return storeToRefs(this.filtroStore).autor.value;
    },
    genero() {
      return storeToRefs(this.filtroStore).genero.value;
    },
   librosFiltrados() {
  return this.libros.filter(libro => {
    const coincideAutor = !this.autor || 
      libro.autor.toLowerCase().includes(this.autor.toLowerCase());
    const coincideTitulo = !this.titulo || 
      libro.titulo.toLowerCase().includes(this.titulo.toLowerCase());
    const coincideGenero = !this.genero || 
      libro.genero.toLowerCase().includes(this.genero.toLowerCase());
    
    return coincideAutor && coincideTitulo && coincideGenero;
  });
}

  },
  methods: {
    async obtenerLibros() {
      try {
        getLibros().then((response) => {
          this.libros = response;
        });
      } catch (error) {
        console.error("❌ Error al obtener libros:", error);
      }
    },
  },
  mounted() {
    this.obtenerLibros();
  },
};
</script>

<style scoped></style>
