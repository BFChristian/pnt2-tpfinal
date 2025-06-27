<template>
  <div class="card h-100">
    <img
      :src="libroData.portada"
      @error="errorImagen"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ this.libroData.titulo }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        {{ this.autorData.nombre }}
      </h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        {{ this.generoData.nombre }}
      </h6>
      <p class="card-text">
        {{ this.libroData.descripcion.slice(0, 60).trim() }}...
      </p>
      <a @click="goToLibro" class="btn btn-primary">mas informacion</a>
    </div>
  </div>
</template>

<script>
import { useLibro } from "@/store/libro";

export default {
  name: "card",
  props: {
    libroData: {
      type: Object,
      required: true,
    },
    autorData: {
      type: Object,
      required: true,
    },
    generoData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // Aquí puedes definir tus datos reactivos
    };
  },
  methods: {
    goToLibro() {
      const store = useLibro();
      store.libroData = this.libroData;
      store.autorData = this.autorData;
      store.generoData = this.generoData;
      this.$router.push("/libro");
    },
    errorImagen(event) {
      event.target.src = "/no-disponible.webp";
    },
  },
  computed: {
    // Aquí puedes definir tus propiedades computadas
  },
};
</script>

<style scoped></style>
