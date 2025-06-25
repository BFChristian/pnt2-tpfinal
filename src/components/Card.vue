<template>
    <div class="card h-100">
        <img :src="libroData.portada" @error="errorImagen" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{this.libroData.titulo}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{this.libroData.autor}}</h6>
            <p class="card-text">{{this.libroData.descripcion}}</p>
           
            <a v-if="libroData.previewLink":href="libroData.previewLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
           📖 Más información
          </a>
           <a
              v-else
             href="#"
             class="btn btn-secondary disabled">
             Sin vista previa
             </a>

             <button
  v-if="!guardado"
  @click="guardarLibro"
  class="btn btn-success mt-2">
  📥 Guardar
</button>
<span v-else class="badge bg-success mt-2">✅ Libro guardado</span>


        </div>
    </div>
</template>

<script>
 import { guardarLibro } from '@/services/libros'
 import { useLibroStore } from '@/stores/libros'

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
            guardado: false
        }
    },
    methods: {
        // Aquí puedes definir tus métodos
        errorImagen(event) {
            event.target.src = '/no-disponible.webp';
        },
        async guardarLibro() {
    const libroAGuardar = {
      titulo: this.libroData.titulo,
      autor: this.libroData.autor,
      descripcion: this.libroData.descripcion,
      genero: this.extraerGenero(this.libroData.descripcion), // O podés dejar un género fijo si querés
      portada: this.libroData.portada,
      pdf: '' // si aún no tenés pdfs, podés dejar esto vacío
      
    }

      try {
        const libroStore = useLibroStore() // usar el store
        await guardarLibro(libroAGuardar)
        this.guardado = true
        await libroStore.cargarLibros() // ✅ actualizar listado en Administrar Libros
      } catch (error) {
        console.error('❌ Error al guardar el libro:', error)
        alert('❌ No se pudo guardar el libro.')
      }
    },
 extraerGenero(descripcion) {
      if (!descripcion) return 'General'

      const texto = descripcion.toLowerCase()
      const generos = {
        novela: 'Novela',
        ficción: 'Ficción',
        ciencia: 'Ciencia',
        estrategia: 'Estrategia'
      }

      const generoEncontrado = Object.entries(generos).find(([clave]) =>
        texto.includes(clave)
      )

      return generoEncontrado ? generoEncontrado[1] : 'General'
    }
  },
    computed: {
        // Aquí puedes definir tus propiedades computadas
    }
 }
</script>

<style scoped></style>