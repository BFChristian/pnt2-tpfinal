<template>
  <div class="container-fluid mt-3">
      <header class="card-header">
        <h1>Libreria ORTeneo</h1>
      </header>
      <main class="card-body">
        <br>
        <Navbar />
        <RouterView />
        <Card/>
      </main>
  </div>
</template>

<script>
/* componentes de simple archivo (template, script y style) */
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style scoped>
</style>
