<template>
  <div class="container">
    <div class="row overflow-auto">
      <div class="col-md-4 mb-4" v-for="libro in libros" :key="libro.id">
        <div v-for="autor in autores" :key="autor.id">
          <div v-for="genero in generos" :key="generos.id">
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
      autores: [
        { id: 1, nombre: "Laura Martínez" },
        { id: 2, nombre: "Carlos Gutiérrez" },
        { id: 3, nombre: "Ana Sánchez" },
        { id: 4, nombre: "José Luis Pérez" },
        { id: 5, nombre: "Elena Gómez" },
        { id: 6, nombre: "Ricardo Álvarez" },
        { id: 7, nombre: "Martín López" },
        { id: 8, nombre: "Isabel Martínez" },
        { id: 9, nombre: "Fernando Ruiz" },
        { id: 10, nombre: "Alberto Torres" },
        { id: 11, nombre: "Beatriz Ramírez" },
        { id: 12, nombre: "Carlos Pérez" },
        { id: 13, nombre: "Martina López" },
        { id: 14, nombre: "Javier González" },
        { id: 15, nombre: "Sofía Díaz" },
        { id: 16, nombre: "Lucía González" },
        { id: 17, nombre: "Oscar Fernández" },
        { id: 18, nombre: "Raúl Jiménez" },
        { id: 19, nombre: "Mónica Vargas" },
        { id: 20, nombre: "Victoria Ruiz" },
        { id: 21, nombre: "María Salazar" },
        { id: 22, nombre: "Ricardo Martínez" },
        { id: 23, nombre: "Tomás Sánchez" },
        { id: 24, nombre: "Patricia López" },
        { id: 25, nombre: "José Gómez" },
      ],
      generos: [
        { id: 1, nombre: "Fantasía" },
        { id: 2, nombre: "Ciencia Ficción" },
        { id: 3, nombre: "Terror" },
        { id: 4, nombre: "Aventura" },
        { id: 5, nombre: "Misterio" },
        { id: 6, nombre: "Romántico" },
        { id: 7, nombre: "Histórico" },
        { id: 8, nombre: "Suspenso" },
        { id: 9, nombre: "Magia" },
        { id: 10, nombre: "Ficción histórica" },
        { id: 11, nombre: "Drama" },
        { id: 12, nombre: "Psicológico" },
        { id: 13, nombre: "Distopía" },
      ],
    };
  },
  methods: {
    getLibros() {
      return getLibros().then((response) => {
        this.libros = response.data;
      });
    },
  },
  computed: {},
  mounted() {
    console.log(this.libros);
    getLibros().then((response) => {
      this.libros = response.data;
    });
    let libro = JSON.stringify(this.libros)
    console.log(this.libros);
  },
};
</script>

<style scoped></style>
