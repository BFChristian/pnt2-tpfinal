import { defineStore } from 'pinia'

export const useFiltroStore = defineStore('filtro', {
  state: () => ({
    autor: '',
    genero: ''
  }),
})

