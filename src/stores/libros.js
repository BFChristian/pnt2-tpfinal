import { defineStore } from 'pinia'
import { getLibros } from '@/services/libros'

export const useLibroStore = defineStore('libros', {
  state: () => ({
    lista: []
  }),
  actions: {
    async cargarLibros() {
      try {
        this.lista = await getLibros()
      } catch (e) {
        console.error('❌ Error al cargar libros desde MockAPI:', e)
      }
    }
  }
})
