import { defineStore } from "pinia";
import { getOpiniones } from "@/services/opiniones";
import { guardarOpinion } from "@/services/opiniones";
import { eliminarOpinion } from "@/services/opiniones";
import { actualizarOpinion } from "@/services/opiniones";

export const useOpinionStore = defineStore("opiniones", {
    state: () => ({
        lista: [],
        cargado: false,
        cargando: false,
    }),
    actions: {
        async cargarOpiniones() {
         if (this.cargado) return;
         this.cargando = true;  
         try {
                this.lista = await getOpiniones();
                this.cargado = true;
            } catch (e) {
                console.error("❌ Error al cargar opiniones desde MockAPI:", e);
            } finally {
                this.cargando = false;
            }
        },
        async guardarOpinionStore(opinion) {
            try {
                const nuevaOpinion = await guardarOpinion(opinion);
                this.lista.push(nuevaOpinion);
            } catch (error) {
                console.error("❌ Error al guardar la opinión:", error);
                throw error;
            }
        },
        async eliminarOpinionStore(id) {
            try {
                await eliminarOpinion(id);
                this.lista = this.lista.filter(o => o.id !== id);
            } catch (error) {
                console.error("❌ Error al eliminar la opinión:", error);
                throw error;
            }
        },
        async actualizarOpinionStore(id, data) {
            try {
                const actualizada = await actualizarOpinion(id, data);
                const index = this.lista.findIndex(o => o.id === id);
                if (index !== -1) {
                    this.lista.splice(index, 1, actualizada);
                }
            } catch (error) {
                console.error("❌ Error al actualizar la opinión:", error);
                throw error;
            }
        }
    },
});
