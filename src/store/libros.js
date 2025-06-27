import { defineStore } from "pinia";
import { getLibros } from "@/services/libros";

export const useLibros = defineStore("libros", {
  state: () => ({
    libros: [],
  }),
  actions: {
    async cargarLibros() {
      try {
        this.libros = await getLibros();
      } catch (e) {
        console.error("❌ Error al cargar libros desde MockAPI:", e);
      }
    },
  },
});
