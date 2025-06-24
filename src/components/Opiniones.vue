<template>
  <div class="container">
    <div class="row vh-100">
      <div class="border p-3 h-100 overflow-auto">
        <div v-for="(reseña, index) in reseñas" :key="index" class="mb-3">
          <h5>
            <!--  por ahora esto muestra solo el id del libro y el usuario  -->
            <p class="text-muted">{{ reseña.libroId }}</p>
            <p class="text-muted">por {{ reseña.usuarioId }}</p>

            <!--  esto deberia buscarlo del back?  -->
            <!--<p class="text-muted">{{ getLibroPorId(reseña.libroId) }}</p>-->
            <!--<p class="text-muted">por {{ getUsuarioPorId(reseña.usuarioId) }}</p> -->
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
import { getLibroPorId } from "@/services/libros";
import { getUsuarioPorId } from "@/services/usuarios";
export default {
  name: "opiniones",
  props: [],
  data() {
    return {
      reseñas: [
        {
          libroId: 1,
          usuarioId: 2,
          rating: 5,
          comentarios:
            "Una historia envolvente y misteriosa. No pude dejar de leer hasta el final.",
        },
        {
          libroId: 4,
          usuarioId: 5,
          rating: 4,
          comentarios:
            "La trama de viajes en el tiempo está bien pensada y muy entretenida.",
        },
        {
          libroId: 7,
          usuarioId: 7,
          rating: 3,
          comentarios:
            "Interesante concepto, aunque por momentos algo confuso.",
        },
        {
          libroId: 12,
          usuarioId: 14,
          rating: 5,
          comentarios: "Profundo y perturbador. Me hizo reflexionar mucho.",
        },
        {
          libroId: 15,
          usuarioId: 13,
          rating: 4,
          comentarios:
            "Una historia original y cautivadora, la ambientación es excelente.",
        },
        {
          libroId: 20,
          usuarioId: 9,
          rating: 2,
          comentarios:
            "Esperaba más desarrollo de los personajes, aunque la idea es buena.",
        },
        {
          libroId: 6,
          usuarioId: 4,
          rating: 5,
          comentarios:
            "Ciencia ficción clásica con un toque moderno. Muy bien logrado.",
        },
        {
          libroId: 2,
          usuarioId: 6,
          rating: 4,
          comentarios:
            "Terror sutil y psicológico, muy recomendable para los fans del género.",
        },
        {
          libroId: 21,
          usuarioId: 9,
          rating: 3,
          comentarios:
            "Buena narrativa, pero algunos pasajes eran repetitivos.",
        },
        {
          llibroId: 18,
          usuarioId: 7,
          rating: 5,
          comentarios:
            "Hermosa metáfora sobre la transformación personal. Me encantó.",
        },
        {
          llibroId: 10,
          usuarioId: 11,
          rating: 4,
          comentarios:
            "Me encantan las historias con secretos antiguos. Bien documentado.",
        },
        {
          llibroId: 25,
          usuarioId: 12,
          rating: 3,
          comentarios:
            "Idea interesante, pero el final fue un poco predecible.",
        },
        {
          llibroId: 9,
          usuarioId: 9,
          rating: 4,
          comentarios: "Muy épico y dramático, con personajes memorables.",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      if (this.reseñas)
        this.currentIndex = (this.currentIndex + 1) % this.reseñas.lenght;
    }, 3000); // cada 3 segundos
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
