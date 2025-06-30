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
           
      <div
        v-if="!cargandoLibros && librosStore.lista.length === 0"
        class="alert alert-info w-100">
        ℹ️ Aún no tenés ningún libro. Guardá un libro en <strong>Administrar Libros</strong> y empezá a disfrutar.
      </div>

      
      <div
        v-else-if="!cargandoLibros && librosFiltrados.length === 0"
        class="alert alert-warning w-100">
        ⚠️ No hay libros que coincidan con los filtros de búsqueda.
      </div>

    </div>
  </div>
</template>

<script>
import { getLibros } from "@/services/libros";
import { useFiltroStore } from "@/stores/filtros";
import { useLibroStore } from "@/stores/libros";
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
            librosStore: useLibroStore()
        };
    },
    computed: {
        titulo() { return this.filtroStore.titulo; },
        autor() { return this.filtroStore.autor; },
        genero() { return this.filtroStore.genero; }, 
        librosFiltrados() {
            return this.librosStore.lista.filter(libro => {
                const coincideAutor = !this.autor ||
                    libro.autor.toLowerCase().includes(this.autor.toLowerCase());
                const coincideTitulo = !this.titulo ||
                    libro.titulo.toLowerCase().includes(this.titulo.toLowerCase());
                const coincideGenero = !this.genero ||
                    libro.genero.toLowerCase().includes(this.genero.toLowerCase());

                return coincideAutor && coincideTitulo && coincideGenero;
            });
        },
         cargandoLibros() { return this.librosStore.cargando; }


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
  this.librosStore.cargarLibros();
},
};
</script>

<style scoped></style>
