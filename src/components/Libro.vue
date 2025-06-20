<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{libro.nombre}}</h1>
                <h2>Autor: {{libro.autor}}</h2>
                <h4>Genero: {{libro.genero}}</h4>
            </div>
            <div class="col-2">
                <img :src="libro.portada" @error="errorImagen" class="img-fluid" alt="Portada del libro">
            </div>  
        </div>
        <div class="row">
            <embed src="/libro_lorem_ipsum.pdf" type="application/pdf" width="100%" height="700px"/>
            <!--<embed :src="libro.pdf" type="application/pdf" width="100%" height="700px"/>-->
            <p>{{libro.descripcion}}</p>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: 'libro',
    props: [],
    data() {
        return {
            libro: {
                nombre: 'Título del Libro',
                autor: 'Autor del Libro',
                genero: 'Género del Libro',
                descripcion: 'Descripción del libro.',
                portada: '',
                pdf: ''
            }
        }
    },
    methods: {
        errorImagen(event) {
            event.target.src = '/no-disponible.webp';
        }
    },
    computed: {
    }
}
</script>

<style scoped>
</style>