<template>
  <div class="container">
    <div class="row vh-100">
      <div class="border p-3 h-100 overflow-auto">
        <div v-for="reseña in reseñas" :key="reseña" class="mb-3">
          <h5>
            {{ reseña.titulo }}
          </h5>
          <p>⭐ {{ reseña.rating }} / 5</p>
          <p class="mb-0">"{{ reseña.comentarios }}"</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "opiniones",
  props: [],
  data() {
    return {
      currentIndex: 0, // Agrego esta inicialización, para que no falle al primer acceso.
      reseñas: [],
      comentariosBase: [
        "Muy buena lectura, lo disfruté bastante.",
        "Me atrapó desde el principio hasta el final.",
        "Lectura rápida y entretenida.",
        "Historia interesante y personajes bien construidos.",
        "No pude dejar de leerlo.",
        "Lo recomiendo si buscas algo ligero.",
        "Una trama sencilla pero efectiva.",
        "Bien escrito y fácil de seguir.",
        "Me gustó, aunque esperaba un poco más.",
        "Perfecto para una tarde tranquila.",
        "Narrativa fluida y agradable.",
        "Una historia con buen ritmo.",
        "Ideal para los amantes del género.",
        "Me dejó pensando después de terminarlo.",
        "Buena opción para desconectar un rato.",
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.reseñas.length;
    }, 3000); // cada 3 segundos
  },
  methods: {
    getComentario(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  computed: {},
  mounted() {
    // Simulación de reseñas, en un caso real podrías obtenerlas de una API
    for (let index = 0; index < 20; index++) {
      this.reseñas.push({
        rating: Math.floor(Math.random() * 5) + 1,
        comentarios:
          this.comentariosBase[
            this.getComentario(1, this.comentariosBase.length - 1)
          ],
      });
    }
  },
};
</script>

<style scoped></style>
