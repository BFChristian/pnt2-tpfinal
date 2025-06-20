<template>
    <div class="container mt-4">
        <div class="overflow-hidden" style="height: 200px;">
            <div class="d-flex flex-column transition"
                :style="{ transform: `translateY(-${currentIndex * itemHeight}px)` }" ref="carrusel">
                <div class="p-3 border-bottom" v-for="(reseña, index) in reseñas" :key="index" :style="{ height: `${itemHeight}px` }">
                    <h5>{{ reseña.titulo }} <small class="text-muted">por {{ reseña.autor }}</small></h5>
                    <p>⭐️ {{ reseña.rating }} / 5</p>
                    <p class="mb-0">"{{ reseña.comentarios }}"</p>
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
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>