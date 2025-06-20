<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-4" v-for="libro in libros" :key="libro.id">
                <Card :libroData="libro" />
            </div>
        </div>
    </div>
</template>

<script>
import { getLibros } from '@/services/libros';
import Card from './Card.vue';

export default {
    name: 'catalogo',
    components: {
        Card
    },
    props: [],
    data() {
        return {
            libros: [
                {
                    id: 1,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: ''
                },
                {
                    id: 2,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: ''
                },
                {
                    id: 3,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: ''
                },
                {
                    id: 4,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: ''
                },
                {
                    id: 5,
                    titulo: 'El Principito',
                    autor: 'Antoine de Saint-Exupéry',
                    descripcion: 'Un clásico de la literatura',
                    portada: ''
                }
            ]
        }
    },
    methods: {
        /*
        async obtenerLibros() {
            const response = await getLibros();
            this.libros = response.data;
        }*/
    },
    computed: {
    }
}
</script>

<style scoped></style>