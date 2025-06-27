<template>
  <div class="container">
    <div class="row overflow-auto">
      <div class="col-md-4 mb-4" v-for="libro in this.libros" :key="libro">
        <div v-for="autor in this.autores" :key="autor">
          <div v-for="genero in this.generos" :key="genero">
            <div
              v-if="libro.autorId == autor.id && libro.generoId == genero.id"
            >
              <Card
                :libroData="libro"
                :autorData="autor"
                :generoData="genero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLibros } from "@/services/libros";
import { getAutores } from "@/services/autores";
import { getGeneros } from "@/services/generos";
import Card from "./Card.vue";

export default {
  name: "catalogo",
  components: {
    Card,
  },
  props: [],
  data() {
    return {
      libros: [],
      autores: [],
      generos: [],
    };
  },
  methods: {},
  computed: {},
  mounted() {
    getLibros().then((response) => {
      this.libros = response;
    });
    getAutores().then((response) => {
      this.autores = response;
    });
    getGeneros().then((response) => {
      this.generos = response;
    });
  },
};
</script>

<style scoped></style>
