<template>
    <h6 class="mt-3">Filtrar por autor</h6>
    <select @change="cambiarAutor($event)" class="form-select">
        <option value=''>Todos</option>
    </select>

    <h6 class="mt-3">Filtrar por género</h6>
    <select @change="cambiarGenero($event)" class="form-select">
        <option value="">Todos</option>
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