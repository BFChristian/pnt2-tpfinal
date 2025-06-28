<template>
  <section class="card">
    <div class="card-header">
      <h3>Agregar Reseña</h3>
    </div>

    <div class="card-body">
      <form novalidate @submit.prevent="enviar">
        <!-- Campo título -->
        <div class="form-group">
          <label for="titulo">Título</label>
          <input
            id="titulo"
            class="form-control"
            type="text"
            v-model.trim="formData.titulo"
            @input="formDirty.titulo = true"
          />
          <div v-if="errorTitulo.mostrar" class="alert alert-danger my-1">
            {{ errorTitulo.mensaje }}
          </div>
        </div>

        <!-- Campo autor -->
        <div class="form-group">
          <label for="autor">Autor</label>
          <input
            id="autor"
            class="form-control"
            type="text"
            v-model.trim="formData.autor"
            @input="formDirty.autor = true"
          />
          <div v-if="errorAutor.mostrar" class="alert alert-danger my-1">
            {{ errorAutor.mensaje }}
          </div>
        </div>

        <!-- Campo comentarios -->
        <div class="form-group">
          <label for="comentarios">Comentarios</label>
          <textarea
            id="comentarios"
            class="form-control"
            v-model.trim="formData.comentarios"
            @input="formDirty.comentarios = true"
          ></textarea>
          <div v-if="errorComentarios.mostrar" class="alert alert-danger my-1">
            {{ errorComentarios.mensaje }}
          </div>
        </div>

        <!-- Campo rating -->
        <div class="form-group">
          <label for="rating">Rating (1 a 5)</label>
          <input
            id="rating"
            class="form-control"
            type="number"
            v-model.number="formData.rating"
            @input="formDirty.rating = true"
          />
          <div v-if="errorRating.mostrar" class="alert alert-danger my-1">
            {{ errorRating.mensaje }}
          </div>
        </div>

        <button
          class="btn btn-success my-3"
          :disabled="validarBotonEnvio()"
        >
          Agregar Reseña
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Formulario',
  data() {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData()
    }
  },
  methods: {
    getInicialData() {
      return {
        titulo: null,
        autor: null,
        comentarios: null,
        rating: null
      }
    },
    validarBotonEnvio() {
      return !this.errorTitulo.ok ||
             !this.errorAutor.ok ||
             !this.errorComentarios.ok ||
             !this.errorRating.ok
    },
    enviar() {
      console.log('Reseña enviada:', { ...this.formData })
      alert('✅ ¡Reseña agregada exitosamente!')

      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    }
  },
  computed: {
    errorTitulo() {
      let mensaje = ""
      if (!this.formData.titulo) mensaje = "Campo requerido"
      else if (this.formData.titulo.length < 3) mensaje = "Debe tener al menos 3 caracteres"
      return {
        mostrar: mensaje !== "" && this.formDirty.titulo,
        mensaje,
        ok: mensaje === ""
      }
    },
    errorAutor() {
      let mensaje = ""
      if (!this.formData.autor) mensaje = "Campo requerido"
      else if (this.formData.autor.length < 3) mensaje = "Debe tener al menos 3 caracteres"
      return {
        mostrar: mensaje !== "" && this.formDirty.autor,
        mensaje,
        ok: mensaje === ""
      }
    },
    errorComentarios() {
      let mensaje = ""
      if (!this.formData.comentarios) mensaje = "Campo requerido"
      else if (this.formData.comentarios.length < 5) mensaje = "Debe tener al menos 5 caracteres"
      return {
        mostrar: mensaje !== "" && this.formDirty.comentarios,
        mensaje,
        ok: mensaje === ""
      }
    },
    errorRating() {
      let mensaje = ""
      if (!this.formData.rating) mensaje = "Campo requerido"
      else if (this.formData.rating < 1 || this.formData.rating > 5)
        mensaje = "Debe estar entre 1 y 5"
      return {
        mostrar: mensaje !== "" && this.formDirty.rating,
        mensaje,
        ok: mensaje === ""
      }
    }
  }
}
</script>

<style scoped></style>