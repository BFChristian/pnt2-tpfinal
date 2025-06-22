<template>
    <h6 class="mt-3">Filtrar por autor</h6>
    <select @change="cambiarAutor($event)" class="form-select">
        <option value="">Todos</option>
        <option value="Gabriel García Márquez">Gabriel García Márquez</option>
        <option value="Sun Tzu">Sun Tzu</option>
    </select>

    <h6 class="mt-3">Filtrar por género</h6>
    <select @change="cambiarGenero($event)" class="form-select">
        <option value="">Todos</option>
        <option value="Novela">Novela</option>
        <option value="Estrategia">Estrategia</option>
    </select>
</template>

<script>
export default {
    name: 'filtros',
    props: [],
    data() {
        return {
            filtroAutor: '',
            filtroGenero: ''
        }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped></style>