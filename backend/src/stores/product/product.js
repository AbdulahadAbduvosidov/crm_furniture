import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const productStore = defineStore('product', () => {
  const state = reactive({
    list: [],
    load: true,
    errorMessage: ''
  })

  const ADD = (data) => {
    state.list.push(data)
  }

  const LIST = computed(() => state.list)

  return { ADD, LIST }
})
