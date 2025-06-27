<template>
  <div>
    <h6 class="mt-3">Filtrar por titulo</h6>
    <input
      type="text"
      v-model="titulo"
      class="form-control"
      placeholder="Escribe un titulo"
    />
    <h6 class="mt-3">Filtrar por autor</h6>
    <input
      type="text"
      v-model="autor"
      class="form-control"
      placeholder="Escribe un autor"
    />
  </div>
</template>

<script>
import { useFiltroStore } from "@/stores/filtros";
import { storeToRefs } from "pinia";

export default {
  name: "Filtros",
  data() {
    return {
      filtroStore: useFiltroStore(),
    };
  },
  computed: {
    titulo: {
      get() {
        return storeToRefs(this.filtroStore).titulo.value;
      },
      set(value) {
        this.filtroStore.titulo = value;
      },
    },
    autor: {
      get() {
        return storeToRefs(this.filtroStore).autor.value;
      },
      set(value) {
        this.filtroStore.autor = value;
      },
    },
  },
};
</script>

<style scoped></style>
