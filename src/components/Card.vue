<template>
  <div class="card h-100">
    <button @click="leer" class="btn p-0">
      <img
        :src="libroData.portada"
        @error="errorImagen"
        class="card-img-top"
        alt="..."
      />
    </button>
    <div class="card-body">
      <h5 class="card-title">{{ this.libroData.titulo }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        {{ this.libroData.autor }}
        <span class="badge bg-secondary">{{ this.libroData.genero }}</span>
      </h6>

      <p v-if="!texto" class="card-text">
        {{ this.libroData.descripcion.slice(0, 60).trim() }}...
      </p>
      <p v-else class="card-text">
        {{ this.libroData.descripcion }}
      </p>
      <a @click="texto = !texto" class="btn btn-primary">
        📖 Más información
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    libroData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      texto: false,
    };
  },
  methods: {
    // Aquí puedes definir tus métodos
    errorImagen(event) {
      event.target.src = "/no-disponible.webp";
    },
  },
  computed: {
    leer() {
      console.log("Leer libro");
    },
  },
};
</script>

<style scoped></style>
