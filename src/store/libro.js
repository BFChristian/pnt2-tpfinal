import { defineStore } from 'pinia';

export const useLibro = defineStore('libro', {
  state: () => ({
    libroData: null,
    autorData: null,
    generoData: null
  })
});