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
    </div>
  </div>
</template>

<script>
import { buscarLibros } from '@/services/posts'
import { useFiltroStore } from '@/stores/filtros'
import { storeToRefs } from 'pinia'
import Card from './Card.vue'

export default {
  name: 'catalogo',
  components: {
    Card
  },
  data() {
    return {
      libros: [],
      filtroStore: useFiltroStore()
    }
  },
  computed: {
    autor() {
      return storeToRefs(this.filtroStore).autor.value
    },
    genero() {
      return storeToRefs(this.filtroStore).genero.value
    },
    librosFiltrados() {
      return this.libros.filter(libro => {
        const coincideAutor = !this.autor || libro.autor.toLowerCase().includes(this.autor)
        const coincideGenero = !this.genero || libro.descripcion.toLowerCase().includes(this.genero)
        return coincideAutor && coincideGenero
      })
    }
  },
  methods: {
    async obtenerLibros() {
      try {
        const datos = await buscarLibros('a')
        this.libros = datos.map(libro => ({
          id: libro.id,
          titulo: libro.volumeInfo.title,
          autor: libro.volumeInfo.authors?.join(', ') || 'Autor desconocido',
          descripcion: libro.volumeInfo.description || 'Sin descripción',
          portada: libro.volumeInfo.imageLinks?.thumbnail || '',
          previewLink: libro.volumeInfo.previewLink || null
        }))
      } catch (error) {
        console.error('❌ Error al obtener libros:', error)
      }
    }
  },
  mounted() {
    this.obtenerLibros()
  }
}
</script>

<style scoped></style>
