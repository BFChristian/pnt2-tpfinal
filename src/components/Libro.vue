<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ buscarLibroPorId.titulo }}</h1>
        <h2>Autor: {{ buscarAutor }}</h2>
        <h4>Genero: {{ buscarGenero }}</h4>
      </div>
    </div>
    <div class="row">
      <embed
        src="/libro_lorem_ipsum.pdf"
        type="application/pdf"
        width="100%"
        height="700px"
      />
      <p>{{ buscarLibroPorId.descripcion }}</p>
    </div>
  </div>
</template>

<script>
import { getAutoresPorId } from "@/services/autores";
import { getGenerosPorId } from "@/services/generos";
import { useLibroId } from "@/store/libroId";
import { useLibros } from "@/store/libros";

export default {
  name: "libro",
  data() {
    return {};
  },
  methods: {},
  computed: {
    buscarLibroPorId() {
      const libroId = useLibroId().id;
      return useLibros().libros.find((libro) => libro.id === libroId);
    },
    buscarAutor() {
      const libro = this.buscarLibroPorId;
      return getAutoresPorId(libro.autorId).nombre || "autor no encontrado";
    },
    buscarGenero() {
      const libro = this.buscarLibroPorId;
      return getGenerosPorId(libro.generoId).nombre || "nombre no encontrado";
    },
  },
};
</script>

<style scoped></style>
