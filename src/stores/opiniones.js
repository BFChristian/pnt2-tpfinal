import { defineStore } from "pinia";
import { getOpiniones } from "@/services/opiniones";
import { guardarOpinion } from "@/services/opiniones";

export const useOpinionStore = defineStore("opiniones", {
    state: () => ({
        lista: [],
    }),
    actions: {
        async cargarOpiniones() {
            try {
                this.lista = await getOpiniones();
            } catch (e) {
                console.error("❌ Error al cargar opiniones desde MockAPI:", e);
            }
        },
        async guardarOpinionStore(opinion) {
            try {
                const nuevaOpinion = await guardarOpinion(opinion);
                this.lista.push(nuevaOpinion);
                alert("Opinión guardada correctamente.");
            } catch (error) {
                console.error("❌ Error al guardar la opinión:", error);
                alert("Error al guardar la opinión.");
            }
        }
    },
});