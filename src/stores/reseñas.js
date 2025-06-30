import { getReseñas,eliminarReseña } from "@/services/reseñas";
import { defineStore } from "pinia";

export const useReseñaStore = defineStore("reseñas", {
  state: () => ({
    lista: [],
  }),
  actions: {
    async cargarReseñas() {
      try {
        this.lista = await getReseñas();
      } catch (e) {
        console.error("❌ Error al cargar reseñas desde Json:", e);
      }
    },
     async eliminarReseñaStore(id) {
          try {
            this.lista = this.lista.filter((reseña) => reseña.id !== id);
            await eliminarReseña(id);
            alert("Reseña eliminada correctamente.");
          } catch (error) {
            console.error("❌ Error al eliminar la reseña:", error);
            alert("Error al eliminar la reseña.");
          }
        },
  },
});
