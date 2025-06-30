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
          {{ modoEdicion ? 'Actualizar Reseña' : 'Agregar Reseña' }}
        </button>


        <button
         v-if="modoEdicion"
        class="btn btn-secondary ms-2 my-3"
        @click="cancelarEdicion">
  
         Cancelar

        </button>
      
      </form>
      
      <div class="mt-4 border-top pt-3">
          <h5>Mis reseñas</h5>

           <div v-if="!cargandoOpiniones && opiniones.length === 0" class="text-muted">
            Aún no agregaste ninguna reseña.
        </div>

      <div v-for="opinion in opiniones" :key="opinion.id" class="mt-2">
         
        <h6 class="text-primary">{{ opinion.titulo }}</h6>
        
        <p class="mb-0 text-secondary">{{ opinion.autor }}</p>
        
        <p>⭐ {{ opinion.rating }} / 5</p>
        
        <p class="mb-0">"{{ opinion.comentarios.slice(0, 100).trim() }}"</p>
        
        <button class="btn btn-sm btn-outline-primary me-2 mt-3" @click="editarOpinion(opinion)" 
           :disabled="modoEdicion && opinionIdEditando === opinion.id">
          
           ✏️ Editar Reseña
          
            </button>
        
           <button 
            class="btn btn-sm btn-outline-danger mt-3"
           @click="confirmarEliminarOpinion(opinion.id)" 
           :disabled="modoEdicion && opinionIdEditando === opinion.id">
          
           🗑️ Eliminar
        
          </button>

          <hr />
       
        </div>
     
      </div>
    
     </div>
  </section>
  <Modal />
</template>

<script>
import { guardarOpinion } from '@/services/opiniones';
import { useModalStore } from '@/stores/modalStore';
import { useOpinionStore } from '@/stores/opiniones'
import Modal from '@/components/Modal.vue'

export default {
  name: 'CrearOpinion',
  components: {
    Modal,
  },
  data() {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      modalStore: useModalStore(),
      opinionStore: useOpinionStore(),
      modoEdicion: false,
      opinionIdEditando: null,
      opinionIdEditando: null,
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
    async enviar() {
  if (this.modoEdicion) {
    await this.opinionStore.actualizarOpinionStore(this.opinionIdEditando, { ...this.formData });
    this.modalStore.abrirModal(
      'Reseña actualizada',
      '✅ Reseña actualizada correctamente.',
      'success'
    );
  } else {
    await this.enviarOpinion({ ...this.formData });
  }

  this.formData = this.getInicialData();
  this.formDirty = this.getInicialData();
  this.modoEdicion = false;
  this.opinionIdEditando = null;
},
    async enviarOpinion(data) {
      try {
       const nuevaOpinion = await guardarOpinion(data);
      this.opinionStore.lista.push(nuevaOpinion); 
        this.modalStore.abrirModal(
          'Reseña guardada',
          '✅ Reseña guardada correctamente.',
          'success'
        );
      } catch (error) {
        console.error(error);
        this.modalStore.abrirModal(
          'Error',
          '❌ Error al guardar la reseña.',
          'danger'
        );
      }
    },
    editarOpinion(opinion) {
    this.formData = { ...opinion };
    this.formDirty = {
      titulo: true,
      autor: true,
      comentarios: true,
      rating: true
    };
    this.modoEdicion = true;
    this.opinionIdEditando = opinion.id;
  },
  cancelarEdicion() {
    this.modoEdicion = false;
    this.opinionIdEditando = null;
    this.formData = this.getInicialData();
    this.formDirty = this.getInicialData();
  },
   confirmarEliminarOpinion(id) {
    this.modalStore.abrirModal(
      'Confirmar eliminación',
      '¿Estás seguro que quieres eliminar esta reseña?',
      'danger',
      () => this.ejecutarEliminacion(id)
    );
  },
  async ejecutarEliminacion(id) {
    try {
      await this.opinionStore.eliminarOpinionStore(id);
      this.modalStore.abrirModal(
        'Reseña eliminada',
        '✅ Reseña eliminada correctamente.',
        'success'
      );
    } catch (error) {
      console.error(error);
      this.modalStore.abrirModal(
        'Error',
        '❌ Error al eliminar la reseña.',
        'danger'
      );
    }
  },
  async actualizarOpinion(id, data) {
  try {
    const actualizada = await actualizarOpinion(id, data);
    const index = this.opinionStore.lista.findIndex(o => o.id === id);
    if (index !== -1) {
      this.opinionStore.lista.splice(index, 1, actualizada);
    }
  } catch (error) {
    console.error(error);
    this.modalStore.abrirModal(
      'Error',
      '❌ Error al actualizar la reseña.',
      'danger'
    );
  }
},
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
    },
    opiniones() {
    return this.opinionStore.lista;
  },
    cargandoOpiniones() {
    return this.opinionStore.cargando;
  },

  },
  mounted() {
  this.opinionStore.cargarOpiniones();
}


}
</script>

<style scoped></style>