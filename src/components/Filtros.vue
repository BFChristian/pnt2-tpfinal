<template>
  <div>
    <h6 class="mt-3">Filtrar por autor</h6>
    <input
      type="text"
      v-model="autor"
      class="form-control"
      placeholder="Escribe un autor"
    />

    <h6 class="mt-3">Filtrar por género</h6>
    <input
      type="text"
      v-model="genero"
      class="form-control"
      placeholder="Escribe un genero"
    />
  </div>
</template>

<script>
import { useFiltroStore } from '@/stores/filtros'
import { storeToRefs } from 'pinia'

export default {
  name: 'Filtros',
  data() {
    return {
      filtroStore: useFiltroStore()
    }
  },
  computed: {
    autor: {
      get() {
        return storeToRefs(this.filtroStore).autor.value
      },
      set(value) {
        this.filtroStore.autor = value
      }
    },
    genero: {
      get() {
        return storeToRefs(this.filtroStore).genero.value
      },
      set(value) {
        this.filtroStore.genero = value
      }
    }
  }
}
</script>


<style scoped></style>