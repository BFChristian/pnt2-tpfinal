<template>
  <div class="container-fluid mt-3">
    <header class="d-flex justify-content-between align-items-center p-3">
      <h1 class="m-0">Librería ORTeneo</h1>
    </header>
    <main>
      <Navbar />
      <RouterView />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style scoped></style>
