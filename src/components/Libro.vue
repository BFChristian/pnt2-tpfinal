<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ this.libroData.titulo }}</h1>
        <h2>Autor: {{ this.autorData.nombre }}</h2>
        <h4>Genero: {{ this.generoData.nombre }}</h4>
      </div>
    </div>
    <div class="row">
      <embed
        src="/libro_lorem_ipsum.pdf"
        type="application/pdf"
        width="100%"
        height="700px"
      />
      <p>{{ this.libroData.descripcion }}</p>
    </div>
  </div>
</template>

<script>
import { useLibro } from "@/store/libro";

export default {
  name: "libro",
  data() {
    return {
      libroData: {
        titulo: "",
        descripcion: "",
      },
      autorData: {
        nombre: "",
      },
      generoData: {
        nombre: "",
      },
    };
  },
  setup() {
    const store = useLibro();
    return {
      libroData: store.libroData,
      autorData: store.autorData,
      generoData: store.generoData,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
