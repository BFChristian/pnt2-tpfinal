<template>
    <div class="container">
        <div class="row vh-100">
            <div class="border p-3 h-100 overflow-auto">
                <div v-for="(reseña, index) in reseñas" :key="index" class="mb-3">
                    <h5>{{ reseña.titulo }} <small class="text-muted">por {{ reseña.autor }}</small></h5>
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
    name: 'opiniones',
    props: [],
    data() {
        return {
           currentIndex: 0, // Agrego esta inicialización, para que no falle al primer acceso.
            reseñas: [
                {
                    "titulo": "El arte de la guerra",
                    "autor": "Sun Tzu",
                    "rating": 5,
                    "comentarios": "Una obra maestra atemporal. Ideal para reflexionar sobre estrategia y liderazgo."
                },
                {
                    "titulo": "El arte de la guerra",
                    "autor": "Sun Tzu",
                    "rating": 5,
                    "comentarios": "Una obra maestra atemporal. Ideal para reflexionar sobre estrategia y liderazgo."
                },
                {
                    "titulo": "El arte de la guerra",
                    "autor": "Sun Tzu",
                    "rating": 5,
                    "comentarios": "Una obra maestra atemporal. Ideal para reflexionar sobre estrategia y liderazgo."
                },
                {
                    "titulo": "El arte de la guerra",
                    "autor": "Sun Tzu",
                    "rating": 5,
                    "comentarios": "Una obra maestra atemporal. Ideal para reflexionar sobre estrategia y liderazgo."
                },
                {
                    "titulo": "Cien años de soledad",
                    "autor": "Gabriel García Márquez",
                    "rating": 4,
                    "comentarios": "La narrativa es atrapante, aunque a veces se vuelve densa. Una lectura imperdible."
                },
                {
                    "titulo": "1984",
                    "autor": "George Orwell",
                    "rating": 5,
                    "comentarios": "Impactante y profundamente relevante incluso hoy. Un clásico que todos deberían leer."
                },
                {
                    "titulo": "El alquimista",
                    "autor": "Paulo Coelho",
                    "rating": 3,
                    "comentarios": "Inspirador, pero con frases algo repetitivas. Bueno para quienes buscan motivación."
                },
                {
                    "titulo": "Rayuela",
                    "autor": "Julio Cortázar",
                    "rating": 4,
                    "comentarios": "Innovador y desafiante. No es para todos los gustos, pero vale la pena el esfuerzo."
                }
            ]
        }
    },
    mounted() {
        setInterval(() => {
            this.currentIndex =
                (this.currentIndex + 1) % this.reseñas.length;
        }, 3000); // cada 3 segundos
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>