<template>
  <div 
    class="modal fade show"
    :class="{ visible: modalStore.mostrar }"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    v-if="modalStore.mostrar"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" :class="headerClass">
          <h5 class="modal-title">{{ modalStore.titulo }}</h5>
          <button type="button" class="btn-close" @click="modalStore.cerrarModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ modalStore.mensaje }}
        </div>
        <div class="modal-footer">
          <button 
            v-if="modalStore.onConfirm" 
            type="button" 
            class="btn btn-danger"
            @click="modalStore.confirmar"
          >Aceptar</button>
          <button type="button" class="btn btn-secondary" @click="modalStore.cerrarModal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modalStore'

export default {
  name: 'Modal',
  data() {
    return {
      modalStore: useModalStore(),
      tipoClases: {
        success: 'bg-success text-white',
        danger: 'bg-danger text-white',
        warning: 'bg-warning text-dark',
        info: 'bg-info text-white'
      }
    }
  },
  computed: {
    headerClass() {
      return this.tipoClases[this.modalStore.tipo] || this.tipoClases.info
    }
  }
}
</script>

<style scoped>
.modal.fade.show {
  display: none;
}
.modal.fade.show.visible {
  display: block;
  background-color: rgba(0,0,0,0.5);
}
</style>
