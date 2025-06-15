<template>
    <div class="container">
        <div class="row">
            <Card v-for="libro in libros" :key="libro.id" :libroData="libro" />
        </div>
    </div>
</template>

<script>
import { getLibros } from '@/services/libros';
import Card from './Card.vue';

export default {
    name: 'catalogo',
    components: {
        // Aquí puedes importar otros componentes si es necesario
        Card
    },
    props: [],
    data() {
        return {
            // Aquí puedes definir tus datos reactivos
            libros: [
                {
                    id: 1,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: 'https://via.placeholder.com/300x200'
                },
                {
                    id: 2,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: 'https://via.placeholder.com/300x200'
                },
                {
                    id: 3,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: 'https://via.placeholder.com/300x200'
                },
                {
                    id: 4,
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una novela distópica',
                    portada: 'https://via.placeholder.com/300x200'
                },
                {
                    id: 5,
                    titulo: 'El Principito',
                    autor: 'Antoine de Saint-Exupéry',
                    descripcion: 'Un clásico de la literatura',
                    portada: 'https://via.placeholder.com/300x200'
                }
            ]
        }
    },
    methods: {
        // Aquí puedes definir tus métodos
        /*
        async obtenerLibros() {
            const response = await getLibros();
            this.libros = response.data;
        }*/
    },
    computed: {
        // Aquí puedes definir tus propiedades computadas
    }
}
</script>

<style scoped></style>