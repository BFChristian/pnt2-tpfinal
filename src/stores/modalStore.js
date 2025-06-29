import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    mostrar: false,
    titulo: '',
    mensaje: '',
    tipo: 'info',
    onConfirm: null // callback opcional
  }),
  actions: {
    abrirModal(titulo, mensaje, tipo = 'info', onConfirm = null) {
      this.titulo = titulo
      this.mensaje = mensaje
      this.tipo = tipo
      this.onConfirm = onConfirm
      this.mostrar = true
    },
    confirmar() {
      if (this.onConfirm) {
        this.onConfirm()
      }
      this.cerrarModal()
    },
    cerrarModal() {
      this.mostrar = false
      this.onConfirm = null
    }
  }
})
