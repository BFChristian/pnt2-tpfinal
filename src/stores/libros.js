import { defineStore } from "pinia";
import { getLibros } from "@/services/libros";
import { eliminarLibro } from "@/services/libros";

export const useLibroStore = defineStore("libros", {
  state: () => ({
    lista: [],
  }),
  actions: {
    async cargarLibros() {
      try {
        this.lista = await getLibros();
      } catch (e) {
        console.error("❌ Error al cargar libros desde MockAPI:", e);
      }
    },
    async eliminarLibroStore(id) {
      try {
        this.lista = this.lista.filter((libro) => libro.id !== id);
        await eliminarLibro(id);
      } catch (error) {
        console.error("❌ Error al eliminar el libro:", error);
        alert("Error al eliminar el libro.");
      }
    },
  },
});
