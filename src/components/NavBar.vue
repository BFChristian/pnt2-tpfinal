<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">ORTeneo</RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/inicio">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/abmlibros">Administrar Libros</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/libro">Libro prueba</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: [],
  data() {
    return {
    }
  },
  methods: {
    goToContadores() {
      this.$router.push('/contadores')
    }
  },
  computed: {

  }
}
</script>

<style scoped></style>
