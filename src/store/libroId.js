import { defineStore } from 'pinia';

export const useLibroId = defineStore('libroId', {
  state: () => ({
    id: null,
  })
});