<template>
    <div class="card h-100">
        <img :src="libroData.portada" @error="errorImagen" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{this.libroData.titulo}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{this.libroData.autor}}</h6>
            <p class="card-text">{{this.libroData.descripcion}}</p>
            <a href="#" class="btn btn-primary">mas informacion</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        libroData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // Aquí puedes definir tus datos reactivos
        }
    },
    methods: {
        // Aquí puedes definir tus métodos
        errorImagen(event) {
            event.target.src = '/no-disponible.webp';
        }
    },
    computed: {
        // Aquí puedes definir tus propiedades computadas
    }
}
</script>

<style scoped></style>